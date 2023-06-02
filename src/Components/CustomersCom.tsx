import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { TABLE_CUSTOM_STYLING, customerData } from "../lib/Constant";
import { EyeIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import { DeleteConfirm } from "../Modal";

type CustomersComProps = {};

const CustomersCom: React.FC<CustomersComProps> = ({}) => {
  const navigation = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [item, setItem] = useState({ id: "" });
  const [fillterList, setFillterList] = useState([]);
  const columns: any = [
    {
      name: "S.No",
      selector: (row: any) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row: any) => `${row.firstName} ${row.lastName}`,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: any) => row.email,
      sortable: true,
    },
    {
      name: "Number",
      selector: (row: any) => row.phoneNumber,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row: any) => row.address,
      sortable: true,
    },
    {
      name: "City",
      selector: (row: any) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row: any) => row.state,
      sortable: true,
    },
    {
      name: "Cuntry",
      selector: (row: any) => row.country,
      sortable: true,
    },
    {
      name: "Postal Code",
      selector: (row: any) => row.postalCode,
      sortable: true,
    },
    {
      name: "Action",
      center: true,
      selector: (row: any) => {
        return (
          <div className=" d-flex justify-content-between align-items-center  ">
            <div className="pe-3" onClick={() => navicateCustomer("edit", row)}>
              <PencilIcon height={20} width={20} color="#3b82f6" />
            </div>
            <div onClick={() => showDeleteModal(row)}>
              <TrashIcon height={20} width={20} color="#e11d48" />
            </div>
          </div>
        );
      },
    },
  ];

  //This function used to show delete modal
  const showDeleteModal = (item: any) => {
    setItem(item);
    setModalShow(true);
  };

  //This function used to navigate add customer page
  const navicateCustomer = (tag: any, item: any) => {
    if (tag == "add") {
      localStorage.setItem("singleId", "");
      navigation("addcustomer");
    } else {
      localStorage.setItem("singleId", item.id);
      navigation("addcustomer");
    }
  };

  //This function used to delete customer
  const deleteCustomer = () => {
    let newDatalist = fillterList?.filter((cust: any) => cust.id != item.id);
    setFillterList(newDatalist);

    localStorage.setItem("customers", JSON.stringify(newDatalist));
    setModalShow(false);
  };

  useEffect(() => {
    let customers = localStorage.getItem("customers");
    let parseCustomer = customers && JSON.parse(customers);

    if (!customers || parseCustomer?.length == 0) {
      setFillterList(customerData);
      localStorage.setItem("customers", JSON.stringify(customerData));
    } else {
      setFillterList(parseCustomer);
    }
  }, []);

  return (
    <div className=" py-3">
      <div className=" d-flex justify-content-between align-items-center w-100 ">
        <h5>Costomers</h5>
        <button
          onClick={() => navicateCustomer("add", {})}
          type="button"
          className="btn btn-primary"
        >
          Add Customer
        </button>
      </div>

      <DataTable
        columns={columns}
        data={fillterList}
        customStyles={TABLE_CUSTOM_STYLING}
        // paginationComponent={CustomMaterialPagination}
        pagination
        subHeader
        noDataComponent={
          <>
            <h2>Customer list Not Avaliable</h2>
          </>
        }
      />
      <DeleteConfirm
        show={modalShow}
        onHide={() => setModalShow(false)}
        deleteCustomer={deleteCustomer}
        item={item}
      />
    </div>
  );
};

export default CustomersCom;
