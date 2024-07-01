import {
  StatusSelector,
  TypeSelector,
  ExportBtn,
  ImportBtn,
  TableElement,
} from "../../components";
import { useQuery } from "@tanstack/react-query";
import { getAllTransactions } from "../../servises/servises";
import { useEffect, useState } from "react";
import { ButtonWrapper, Pagination } from "./TransactionPageStyles";

const TransactionPage = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const [filteredData, setFilteredData] = useState([]);

  const { data } = useQuery({
    queryKey: ["transactions"],
    queryFn: getAllTransactions,
  });

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const filterByType = (type) => {
    const filteredTransactionsByType = data.filter(
      (item) => item.Type === type
    );
    setFilteredData(filteredTransactionsByType);
  };

  const filterByStatus = (status) => {
    const filteredTransactionsByStatus = data.filter(
      (item) => item.Status === status
    );
    setFilteredData(filteredTransactionsByStatus);
  };

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = filteredData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <ButtonWrapper>
        <StatusSelector filterByStatus={filterByStatus} />
        <TypeSelector filterByType={filterByType} />
        <ExportBtn data={filteredData} />
        <ImportBtn />
      </ButtonWrapper>
      <TableElement data={currentItems} />
      <Pagination
        style={{ display: "flex" }}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default TransactionPage;
