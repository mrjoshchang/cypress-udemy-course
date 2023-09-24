import PlaygroundTable from "../components/PlaygroundTable";

function PlaygroundPage() {
  const data = [
    { api: "todo-list", comp: "", ui: "alerts" },
    { api: "", ui: "attributes" },
    { api: "", ui: "buttons" },
    { api: "", ui: "checkbox" },
    { api: "", ui: "downloads" },
    { api: "", ui: "dropdowns" },
    { api: "", ui: "form" },
    { api: "", ui: "iframe" },
    { api: "", ui: "radio" },
    { api: "", ui: "scroll" },
    { api: "", ui: "table" },
    { api: "", ui: "text" },
    { api: "", ui: "trigger" },
    { api: "", ui: "upload" },
  ];

  return (
    <>
      <h2>Playground</h2>
      <p>This is a playground meant for testing purposes.</p>

      <PlaygroundTable data={data} />
    </>
  );
}

export default PlaygroundPage;
