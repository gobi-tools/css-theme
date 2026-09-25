import { useRef } from "react";
import DocLayout from "../../../common/components/DocsLayout";
import CodeSyntax from "../../../common/components/CodeSyntax";

export default function Modal({ theme }) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const openDialog = () => dialogRef.current?.showModal();

  return (
    <DocLayout theme={theme}>
      <section className="row">
        <div>
          <p>
            Native browser dialogs are supported out of the box and are styled as
            modals. Child elements are styled the same as any other element.
          </p>
          <p>
            Click the button below to open the modal dialog.
          </p>
          <p>
            <button onClick={openDialog}>
              Open modal
            </button>
          </p>
          <DialogModal ref={dialogRef} />
        </div>
        <div>
          <CodeSyntax lang={'xml'}>
            {`<button id="openBtn">Open modal</button>

<dialog id="modal">
  <h2>Dialog</h2>
  <p>Lorem ipsum...</p>

  <form method="dialog">
    <div role="group">
      <div class="row">
        <button 
          value="cancel" 
          class="error" 
          formNoValidate>
          Cancel
        </button>
        <div></div>
        <button value="confirm">
          Confirm
        </button>
      </div>
    </div>
  </form>
</dialog>
`}
          </CodeSyntax>
        </div>
      </section>
    </DocLayout>
  );
}

function DialogModal(
  props: {
    ref: React.RefObject<HTMLDialogElement>,
  }
) {
  return (
    <dialog ref={props.ref}>
      <h2>Dialog</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <form method="dialog">
        <div role="group">
          <div className="row">
            <button className="error" value="cancel" formNoValidate>Cancel</button>
            <div></div>
            <button value="confirm">Confirm</button>
          </div>
        </div>
      </form>
    </dialog>
  )
}