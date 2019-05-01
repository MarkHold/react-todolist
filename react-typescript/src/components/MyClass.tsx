import * as React from 'react';



//first we define the types that our class will have in interfaces

export interface  MyClassProps  { name: string; }

//then we implement the interface in the class <MyClassProperties>
class MyClass extends React.Component<MyClassProps>{
    public render() {
      return (
        <div>
          
        <h1>{this.props.name}</h1>
        </div>
      );
    }
  }

export default MyClass;