import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Searchbar from "./Searchbar";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const [filteredList, setFilteredList] = useState([]);
  const { contactList, keyword } = useSelector((state) => state);
  console.log(contactList, keyword);

  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword]);
  return (
    <>
      <h3>Friends List</h3>
      <Searchbar />
      {filteredList.map(() => (
        <ContactItem key={index} item={item} />
      ))}
    </>
  );
};

export default ContactList;
