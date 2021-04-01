import React, { useEffect, useState } from 'react';
import { FaEye, FaTrashAlt } from 'react-icons/fa';
import UserModal from '../Shared/UserModal';

const Festive = () => {
  const [FestiveList, setFestiveList] = useState<any[]>([]);
  const [userPost, setUserPost] = useState<any[]>([]);
  const [ModalPost, setModalPost] = useState<any[]>([]);
  const [isModal, setIsModal] = useState<Boolean>(false);
  const [name, setName] = useState<string>('');

  //Get Data from API
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((data) => {
        return data.json();
      })
      .then((data2) => {
        for (let i = 0; i < data2.length; i++) {
          data2[i].isChecked = false;
        }
        setFestiveList(data2);
      });

    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((data) => {
        return data.json();
      })
      .then((data2) => {
        setUserPost(data2);
      });
  }, []);

  //Remove a Post
  function removePost(id: any) {
    const newList = FestiveList.filter((e) => e.id !== id);
    setFestiveList(newList);
  }

  //View a Post
  function viewPost(id: number) {
    const myPost = userPost.filter((e) => e.id === id);
    document.body.style.overflow = 'hidden';
    setIsModal(true);
    setModalPost(myPost);
  }

  //Close Modal
  function closeModal() {
    setIsModal(false);
    document.body.style.overflow = 'visible';
  }

  //handle Change
  function handleChange(event: any) {
    setName(event.target.value);
  }

  //Filter Name Search list
  const filteredData = FestiveList.filter(
    (e) => e.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
  );

  //Select a row
  const selectRow = (index: number) => {
    let arr = [...FestiveList];
    let item1 = arr[index];
    item1.isChecked = !item1.isChecked;
    setFestiveList(arr);
  };

  return (
    <div className="festiveData">
      <div className="filterRow">
        <form className="inlineForm">
          <div className="formGroup">
            <label>Search By </label>
            <input
              type="text"
              className="formControl"
              placeholder="Name"
              value={name}
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
            {filteredData.map((e, index) => (
              <tr key={e.id} id={e.id} className={e.isChecked ? 'active' : ''}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>
                  {e.address.suite}, {e.address.street}, {e.address.city}
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btnPrime"
                    onClick={() => viewPost(e.id)}
                  >
                    <FaEye /> View
                  </button>
                  <button
                    type="button"
                    className="btn btnDanger"
                    onClick={() => removePost(e.id)}
                  >
                    <FaTrashAlt /> Delete
                  </button>
                  <input type="checkbox" onChange={() => selectRow(index)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModal &&
        ModalPost.map((e) => (
          <UserModal
            key={e.id}
            id={e.id}
            title={e.title}
            body={e.body}
            closeModal={closeModal}
          />
        ))}
    </div>
  );
};

export default Festive;
