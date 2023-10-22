import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';


import { Header } from '../components';

const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-0 mt-24 p-2 md:p-8 bg-white rounded-3xl">
      <Header category="Page" title="Alerts" />
      {/*  */}
    </div>
  );
};

export default Customers;