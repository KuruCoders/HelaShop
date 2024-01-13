import Swal from 'sweetalert2';
class CusSwal {
    deleteConfiramation = async (onDeleteConfirmed) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            confirmButtonColor: "#DC3545",
            reverseButtons: true,
            width: "400px",
        })
        if (result.isConfirmed) {
            // Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     width: "350px",
            //     confirmButtonColor: "#10b065",
            // });
            //callBack
            onDeleteConfirmed()
        }
    }
    updateConfiramation = async (onUpdateConfirmed) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: "Yes, Update it!",
            confirmButtonColor: "#FFC107",
            reverseButtons: true,
            width: "400px",
        })
        if (result.isConfirmed) {
            //callBack
            onUpdateConfirmed()
            Swal.fire({
                title: "Updated!",
                text: "Your file has been updated.",
                width: "350px",
                confirmButtonColor: "#10b065",
            });
        }
    }
    addedConfirmation = async (onAddedConfirmation) => {
        //callBack
        onAddedConfirmation()
        Swal.fire({
            title: "Added!",
            text: "Your Record has been Added Succesfully.",
            width: "400px",
            confirmButtonColor: "#10b065",
        });
    }
    customMessageConfirmation = async (title, message, onCustomMessage) => {
        //callBack
        onCustomMessage();
        Swal.fire({
            title: title,
            text: message,
            width: "400px",
            confirmButtonColor: "#10b065",
        });
    }
}
export default CusSwal = new CusSwal()
