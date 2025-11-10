import { Modal, FormControl, Button } from "react-bootstrap";
export default function SubAssignmentEditor({ show, cancelDelete, confirmDelete, assignmentToDelete,}: {
 show: boolean; handleClose: () => void; dialogTitle: string; assignmentName: string; setAssignmentName: (name: string) => void;
 addModule: () => void; }) {
 return (
  <Modal show={show} onHide={cancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
     Are you sure you want to delete the assignment{" "}
          <strong>&quot;{assignmentToDelete?.title}&quot;</strong>?
          <br />
          <span className="text-danger">This action cannot be undone.</span>
   </Modal.Body>
   <Modal.Footer>
 <Button variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
    </Modal.Footer>
  </Modal>
);}
