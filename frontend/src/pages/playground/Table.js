import SortableTable from '../../components/SortableTable';
import BackButton from '../../components/common/BackButton';

const TablePage = () => {
  const tableData = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
    { id: 3, name: 'Bob', age: 22 },
    { id: 4, name: 'Xena', age: 56 },
    { id: 5, name: 'Johnny', age: 34 },
    { id: 6, name: 'Hannah', age: 89 },
    { id: 7, name: 'Robert', age: 9 },
    { id: 8, name: 'Sarah', age: 32 },
    { id: 9, name: 'Bobbert', age: 48 },
    { id: 10, name: 'Denice', age: 73 },
  ];

  return (
    <div>
      <BackButton />
      <h2 style={{ textDecoration: 'underline' }}>Table Page</h2>
      <h3>Sortable Table Example</h3>
      <SortableTable data={tableData} />
    </div>
  );
};

export default TablePage;
