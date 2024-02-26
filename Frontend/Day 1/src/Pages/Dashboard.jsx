import React from 'react'
import { Navbar } from '../Components/Navbar'
import "../assets/css/style.css";
// import { useState, useEffect } from 'react';
// import { getProduct, deleteProduct  } from "../../../Api";
// import { useNavigate } from 'react-router-dom';
// import Layout from '../Layout/Layout';
// import { Toaster } from 'react-hot-toast';
// import {  PlusCircle,} from 'lucide-react';

// const Events = () => {
  // const navigate = useNavigate();
  // const [products, setProducts ] = useState([]);

  // const fetchProducts = async () => {
  //   try {
  //     const response = await getProduct()
  //     setProducts(response.data);
  //   }

  //   catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
  //   fetchProducts();
  // }, [])

  // const handleEdit = (id) => {
  //   navigate(`/admin/editproduct/${id}`);
  // }
  // const handleDelete = async (id) => {
  //   try {
  //     const res = await deleteProduct(id);
  //     console.log(res.status)
  //     if (res.status == 200) {
  //       toast.success('Successfully Product Deleted !');
  //     }
  //     fetchProducts();
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }

  // const routeAdd = () => {
  //   navigate('/admin/addproduct')
  // }
  // const routeLogout = () => {
  //   navigate('/')
  // }
export default function Dashboard() {

  return (
    <>
    <Navbar/>
      <div className='mainx'>
        
        <div className='shadow bg-white'>
          <table className='data-table'>
            <thead>
              <tr>
              <th>
                  Booking Id
                </th>
                <th>
                  Name
                </th>
                <th>
                  Date
                </th>
                <th>
                  Event Type
                </th>
                <th>
                  Status
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  )
}