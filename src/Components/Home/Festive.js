import React, { useEffect, useState } from 'react';
import { FaEye, FaTrashAlt } from 'react-icons/fa';
import Modal from '../Shared/Modal'


const Festive = () => {

    const [FestiveList, setFestiveList] = useState([]);
    const [userPost, setUserPost] = useState([]);
    const [ModalPost, setModalPost] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const [name, setName] = useState('')

    //Get Data from API
    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(data => {
            return data.json()
        }).then(data2 => {
            setFestiveList(data2)
        });

        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(data => {
            return data.json()
        }).then(data2 => {
            setUserPost(data2)
        });

    }, []);

    //Remove a Post
    function removePost(id) {
        const newList = FestiveList.filter((e) => e.id !== id); 
        setFestiveList(newList);
    }

    //View a Post
    function viewPost(id){        
        const myPost = userPost.filter(e => e.id === id);
        document.body.style.overflow = "hidden";
        setIsModal(true)
        setModalPost(myPost);
    }

    //Close Modal
    function closeModal(){
        setIsModal(false);
        document.body.style.overflow = "visible";
    }

    function KeyDown(event) {
        if (event.keyCode === 8) {
            let a = event.target.value;
            setName(a)
            let b = FestiveList.filter(e => e.name.startsWith(a))
            setFestiveList(b)
        }
    }


    //handle Change
    function handleChange (event) {
        let a = event.target.value;
        setName(a)
        console.log(a)
        let b = FestiveList.filter(e => e.name.startsWith(a))
        setFestiveList(b)
    }
    

    return (        
        <div className="festiveData">
            <div className="filterRow">
                <form className="inlineForm">
                    <div className="formGroup">
                        <label>Search By </label>
                        <input type="text"  className="formControl"
                         placeholder="Name" value={name}
                          onChange={(event) => handleChange(event)}
                           />
                    </div>
                </form>
            </div>
            <div className="tableResponsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Actoin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            FestiveList.map(e =>
                                <tr key={e.id} id={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.username}</td>
                                    <td>{e.email}</td>
                                    <td>{e.address.suite}, {e.address.street}, {e.address.city}</td>
                                    <td>
                                        <button type="button" className="btn btnPrime" onClick={() => viewPost(e.id)}>
                                            <FaEye/> View
                                        </button>
                                        <button type="button" className="btn btnDanger" onClick={() => removePost(e.id)}>
                                            <FaTrashAlt/> Delete
                                        </button>
                                    </td>
                                </tr>    
                        )}
                    </tbody>
                </table>
            </div>
            
            {
                isModal &&
                ModalPost.map(e => 
                <Modal
                    key={e.id}
                    id={e.id}
                    title={e.title}
                    body={e.body}
                    closeModal={closeModal}                
                />
            )}
                    
        </div>
       
    )
}

export default Festive;

//https://stackoverflow.com/questions/51801907/how-to-create-react-search-filter-for-search-multiple-object-key-values
// class App extends React.Component {
//     state = {
//       filter: "",
//       data: [
//         {
//           fname: "Jayne",
//           lname: "Washington",
//           email: "jaynewashington@exposa.com",
//           gender: "female"
//         },
//         {
//           fname: "Peterson",
//           lname: "Dalton",
//           email: "petersondalton@exposa.com",
//           gender: "male"
//         },
//         {
//           fname: "Velazquez",
//           lname: "Calderon",
//           email: "velazquezcalderon@exposa.com",
//           gender: "male"
//         },
//         {
//           fname: "Norman",
//           lname: "Reed",
//           email: "normanreed@exposa.com",
//           gender: "male"
//         }
//       ]
//     };
  
//     handleChange = event => {
//       this.setState({ filter: event.target.value });
//     };
  
//     render() {
//       const { filter, data } = this.state;
//       const lowercasedFilter = filter.toLowerCase();
//       const filteredData = data.filter(item => {
//         return Object.keys(item).some(key =>
//           item[key].toLowerCase().includes(lowercasedFilter)
//         );
//       });
  
//       return (
//         <div>
//           <input value={filter} onChange={this.handleChange} />
//           {filteredData.map(item => (
//             <div key={item.email}>
//               <div>
//                 {item.fname} {item.lname} - {item.gender} - {item.email}
//               </div>
//             </div>
//           ))}
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(<App />, document.getElementById("root"));