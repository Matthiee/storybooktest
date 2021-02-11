// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductListComponent } from './product-list.component';
import { PRODUCTS } from '../products';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
  title: 'Example/ProductList',
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [ProductListComponent, ProductItemComponent],
      imports: [CommonModule],
    }),
    withKnobs,
  ],
};

const Template: Story<ProductListComponent> = (args: ProductListComponent) => ({
  component: ProductListComponent,
  props: args,
});

export const Default = () => ({
  component: ProductListComponent,
  template: `
    <div style="padding: 3rem">
      <app-product-list [products]="products"></app-product-list>
    </div>
  `,
  props: {
    products: PRODUCTS,
  },
});
