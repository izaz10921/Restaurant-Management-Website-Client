/* eslint-disable react/prop-types */

const ManageMyFoodRow = ({ food }) => {

    const {_id, foodImage, foodName, donatorName, expiredDate, donorEmail, additionalNotes } = food;

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed){
            fetch(``)
            .then(res=> res.json())
            .then(data => {
                console.log(data);
            })
        }
    }





    return (
        <tr>
            <th>
                <button onClick={()=> handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={foodImage} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{foodName}</div>
                        <div className="text-sm opacity-50">{additionalNotes}</div>
                    </div>
                </div>
            </td>
            <td>
                {donatorName}
                <br />
                <span className="badge badge-ghost badge-sm">{donorEmail}</span>
            </td>
            <td>{expiredDate}</td>
            <th>
                <button className="btn btn-primary btn-xs">Update</button>
            </th>
            <th>
                <button className="btn btn-primary btn-xs">Manage food</button>
            </th>
        </tr>

    );
};

export default ManageMyFoodRow;