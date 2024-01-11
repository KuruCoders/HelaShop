import React from 'react'

export default function AddStaffModal() {
    return (
        <>
            {/* Modal */}
            <div className="modal fade" id="addStaffModal" tabIndex={-1} aria-labelledby="addStaffModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 fw-bolder" id="addStaffModal">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div class="modal-body">
                            <p>Modal body text goes here.Modal body text goes here.Modal body text goes here.Modal body text goes here.Modal body text goes here.Modal body text goes here.Modal body text goes here.Modal body text goes here.Modal body text goes here.Modal body text goes here.Modal body text goes here.Modal body text goes here.Modal body text goes here.Modal body text goes here.Modal body text goes here.Modal body text goes here.Modal body text goes here.Modal body text goes here.Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-cancelBtn" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-okBtn">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
