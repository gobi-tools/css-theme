import { useRef } from "react";
import DocLayout from "../../../common/components/DocsLayout";

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
          <pre><code>
            {`<button id="openBtn">Open modal</button>

<dialog id="modal">
  <h2>Dialog</h2>
  <p>Lorem ipsum...</p>

  <form method="dialog">
    <div class="group">
      <div class="row">
        <button 
          value="cancel" 
          class="error" 
          formNoValidate>
          Cancel
        </button>
        <div class="gap">
        </div>
        <button value="confirm">
          Confirm
        </button>
      </div>
    </div>
  </form>
</dialog>
`}
          </code></pre>
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
        <div className="group">
          <div className="row">
            <button className="error" value="cancel" formNoValidate>Cancel</button>
            <div className="gap"></div>
            <button value="confirm">Confirm</button>
          </div>
        </div>
      </form>
    </dialog>
  )
}