import DocLayout from "../../../common/components/DocsLayout";

export default function Semantic({ theme }) {
  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <hgroup className="card">
            <h1>Header <span className="primary">Cool</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </hgroup>
        </div>
        <div>
          ref
        </div>
      </section>
    </DocLayout>
  );
}