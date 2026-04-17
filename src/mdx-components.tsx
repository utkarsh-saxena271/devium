// import type { MDXComponents } from 'mdx/types'

// const components: MDXComponents = {}

// export function useMDXComponents(): MDXComponents {
//   return components
// }
import type { MDXComponents } from 'mdx/types'
import CopyButton from './components/CopyButton';
import React from 'react';


function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;

  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }

  if (React.isValidElement(node)) {
    const element = node as React.ReactElement<{ children?: React.ReactNode }>;
    return extractText(element.props.children);
  }

  return "";
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-5xl font-bold mt-8 mb-4 text-zinc-50">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl font-bold mt-6 mb-3 text-zinc-100">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl font-semibold mt-5 mb-2 text-zinc-200">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl font-semibold mt-5 mb-2 text-zinc-200/80">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-base leading-relaxed mb-4 text-zinc-300">{children}</p>
    ),
    code: ({ children, className }) => (
      <code
        className={`${className} block w-full bg-transparent text-sm text-zinc-100 font-mono leading-relaxed`}
      >
        {children}
      </code>
    ),
    pre: ({ children }) => {
      const codeText = extractText(children);

      return (
        <div className="relative mb-4">
          <CopyButton text={codeText} />
          <pre className="bg-zinc-950 px-4 py-3 rounded-lg overflow-x-auto border border-zinc-200">
            {children}
          </pre>
        </div>
      );
    },
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 text-slate-300 space-y-2">{children}</ul>
    ),
    li: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
    ...components,
  }
}