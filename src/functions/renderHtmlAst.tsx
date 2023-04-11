import { createElement, useMemo } from "react"
import { unified } from "unified"
import rehypeReact from "rehype-react"

export const renderHtmlAst = (htmlAst: any) =>
  useMemo(() => {
    const processor = unified().use(rehypeReact, {
      createElement,
    })

    return processor.stringify(htmlAst)
  }, [htmlAst])
