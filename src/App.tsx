/*
  TODO:
 * Custom Hooks used for.. 
  --- Sharing complex behavior between multiple components (much like with container components)
 */
import React from 'react';
import Left from 'components/atom/left';
import Right from 'components/atom/right';
import SplitScreen from 'components/molecules/SplitScreen';
import RegularList from 'components/molecules/RegularList';
import NumberList from 'components/molecules/NumberList';
import SmallPersonList from 'components/atom/small-person-list';
import LargePersonList from 'components/atom/large-person-list';
import SmallProduceList from 'components/atom/small-product-list';
import LargeProduceList from 'components/atom/large-product-list';
import HocComponent from 'components/molecules/HOC';
import UserLoader from 'components/molecules/UserLoader';
import UserInfoForm from 'components/atom/user-info-form';
import { people, products } from 'data';

const PersonListWrapper = HocComponent(LargePersonList);

const App = () => {
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Example 1</h3>
      <SplitScreen leftComponent={<Left>left components</Left>} rightComponent={<Right>Right components</Right>} />

      <h3 style={{ textAlign: 'center' }}>Example 2</h3>
      <SplitScreen
        leftComponent={<RegularList items={people} resourceName="person" itemComponent={SmallPersonList} />}
        rightComponent={<RegularList items={people} resourceName="person" itemComponent={LargePersonList} />}
      />

      <h3 style={{ textAlign: 'center' }}>Example 3</h3>
      <SplitScreen
        leftComponent={<NumberList items={products} resourceName="product" itemComponent={SmallProduceList} />}
        rightComponent={<NumberList items={products} resourceName="product" itemComponent={LargeProduceList} />}
      />

      <SplitScreen
        rightComponent={<NumberList items={products} resourceName="product" itemComponent={LargeProduceList} />}
      />

      <h3 style={{ textAlign: 'center' }}>Example 4</h3>
      <SplitScreen
        rightComponent={
          <UserLoader>
            <LargePersonList />
          </UserLoader>
        }
      />

      <h3 style={{ textAlign: 'center' }}>Example 5</h3>
      <SplitScreen rightComponent={<PersonListWrapper people={people} />} />

      <h3 style={{ textAlign: 'center' }}>Example 6</h3>
      <SplitScreen rightComponent={<UserInfoForm />} />
    </div>
  );
};

export default App;
