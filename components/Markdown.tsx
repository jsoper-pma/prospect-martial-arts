import Link from "next/link";
import type { ReactNode } from "react";

// Minimal markdown renderer for the subset used in lib/blog-posts.ts:
// ## / ### headings, paragraphs, "- " unordered lists, **bold**,
// *italic*, and [text](url) links.

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // Tokenize links, bold, italics
  const pattern = /(\[[^\]]+\]\([^)]+\))|(\*\*[^*]+\*\*)|(\*[^*]+\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    const key = `${keyPrefix}-${i++}`;
    if (token.startsWith("[")) {
      const m = /\[([^\]]+)\]\(([^)]+)\)/.exec(token);
      if (m) {
        const [, label, href] = m;
        if (href.startsWith("/")) {
          nodes.push(
            <Link key={key} href={href} className="font-semibold text-pma-navy underline decoration-pma-red/40 underline-offset-2 hover:decoration-pma-red">
              {renderInline(label, key)}
            </Link>
          );
        } else {
          nodes.push(
            <a
              key={key}
              href={href}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="font-semibold text-pma-navy underline decoration-pma-red/40 underline-offset-2 hover:decoration-pma-red"
            >
              {renderInline(label, key)}
            </a>
          );
        }
      }
    } else if (token.startsWith("**")) {
      nodes.push(<strong key={key}>{renderInline(token.slice(2, -2), key)}</strong>);
    } else {
      nodes.push(<em key={key}>{renderInline(token.slice(1, -1), key)}</em>);
    }
    lastIndex = match.index + token.length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

export default function Markdown({ content }: { content: string }) {
  const blocks = content.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);

  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (block.startsWith("### ")) {
          return (
            <h3 key={i} className="text-xl font-extrabold pt-2 text-pma-navy">
              {renderInline(block.slice(4), `h3-${i}`)}
            </h3>
          );
        }
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="text-2xl md:text-3xl font-extrabold pt-4 text-pma-navy">
              {renderInline(block.slice(3), `h2-${i}`)}
            </h2>
          );
        }
        if (block.split("\n").every((line) => line.trim().startsWith("- "))) {
          return (
            <ul key={i} className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
              {block.split("\n").map((line, j) => (
                <li key={j}>{renderInline(line.trim().slice(2), `li-${i}-${j}`)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-gray-700 leading-relaxed">
            {renderInline(block, `p-${i}`)}
          </p>
        );
      })}
    </div>
  );
}
