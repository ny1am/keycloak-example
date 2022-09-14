import stringify from "json-stringify-pretty-compact";

function JsonViewer({ json }: { json: unknown }) {
  const innerHtml = {
    __html: stringify(json),
  };

  return (
    <pre
      style={{ whiteSpace: "pre-wrap" }}
      dangerouslySetInnerHTML={innerHtml}
    />
  );
}

export default JsonViewer;
