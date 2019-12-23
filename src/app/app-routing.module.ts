import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./components/products/products.component";
import { InventoryComponent } from "./components/inventory/inventory.component";
import { ReplenishComponent } from "./components/replenish/replenish.component";
import { OrdersComponent } from "./components/orders/orders.component";
import { ReturnsComponent } from "./components/returns/returns.component";

const routes: Routes = [
  { path: "", redirectTo: "products", pathMatch: "prefix" },
  { path: "products", component: ProductsComponent },
  { path: "inventory", component: InventoryComponent },
  { path: "replenish", component: ReplenishComponent },
  { path: "orders", component: OrdersComponent },
  { path: "returns", component: ReturnsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
