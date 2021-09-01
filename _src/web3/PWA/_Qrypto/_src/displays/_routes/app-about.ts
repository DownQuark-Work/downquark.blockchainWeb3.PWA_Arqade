import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('dq-display-app-about')
export class AppAbout extends LitElement {
  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
      <fast-breadcrumb>
    <fast-breadcrumb-item href="#">Breadcrumb item 1</fast-breadcrumb-item>
    <fast-breadcrumb-item href="#"><span slot="separator">•</span>Breadcrumb item 2</fast-breadcrumb-item>
    <fast-breadcrumb-item>Breadcrumb item 3</fast-breadcrumb-item>
</fast-breadcrumb>
<div>
    <style>
        fast-avatar {
                --avatar-fill-accent-primary: #900;
            }
        fast-badge {
            --badge-fill-primary: rgba(155, 100, 0, 1);
            --badge-fill-secondary: #00ff00;
            --badge-fill-transparent: transparent;
            --badge-color-black: #000000;
            --badge-color-white: #ffffff;
        }
    </style>
    <div>
        <fast-avatar alt="Annie's profile image" link="#" name="Annie Lennox" shape="circle" fill="accent-primary">
            xXx<fast-badge fill="transparent" color="white" slot="badge" style="right:-1ch;">🥑</fast-badge></fast-avatar>
    </div>
    <div>The Flash (or simply Flash) is the name of several superheroes appearing inAmerican comic books published by DC Comics.<fast-disclosure title="More about Flash" appearance="lightweight"><span slot="end">⚡️</span>
        <div>Created by writer Gardner Fox and artist Harry Lampert, the original Flashfirst appeared in Flash Comics #1 (cover date January 1940/release monthNovember 1939). Nicknamed the "Scarlet Speedster", all incarnations of theFlash possess "super speed", which includes the ability to run, move, andthink extremely fast, use superhuman reflexes, and seemingly violatecertain laws of physics.</div>
    </fast-disclosure>
</div>
</div>
        <h2>About Page</h2>
        Make sure to look at all the options (dropdown menu in the top left) here: https://explore.fast.design/components/fast-data-grid
        <br/>
        As well as their API reference: https://www.fast.design/docs/api/fast-animation
        <div>
        <fast-menu>
    <fast-menu-item>Menu item 00</fast-menu-item>
    <fast-menu-item>Menu item 0</fast-menu-item>
    <fast-menu-item>Menu item 1<fast-menu slot="submenu">
            <fast-menu-item>Menu item 1.1</fast-menu-item>
            <fast-menu-item>Menu item 1.2</fast-menu-item>
            <fast-menu-item>Menu item 1.3</fast-menu-item>
        </fast-menu>
    </fast-menu-item>
    <fast-menu-item>Menu item 2<fast-menu slot="submenu">
            <fast-menu-item>Menu item 2.1</fast-menu-item>
            <fast-menu-item>Menu item 2.2</fast-menu-item>
            <fast-menu-item>Menu item 2.3</fast-menu-item>
        </fast-menu>
    </fast-menu-item>
    <fast-menu-item>Menu item 3<fast-menu slot="submenu">
            <fast-menu-item>Menu item 3.1</fast-menu-item>
            <fast-menu-item>Menu item 3.2</fast-menu-item>
            <fast-menu-item>Menu item 3.3</fast-menu-item>
        </fast-menu>
        </fast-menu-item>
        <fast-divider></fast-divider>
    <fast-menu-item role="menuitemcheckbox">Checkbox 1</fast-menu-item>
    <fast-menu-item role="menuitemcheckbox">Checkbox 2</fast-menu-item>
    <fast-divider></fast-divider>
    <fast-menu-item role="menuitemradio">Radio 1.1</fast-menu-item>
    <fast-menu-item role="menuitemradio">Radio 1.2</fast-menu-item>
    <fast-divider></fast-divider>
    <fast-menu-item role="menuitemradio">Radio 2.1</fast-menu-item>
    <fast-menu-item role="menuitemradio">Radio 2.2</fast-menu-item>
    </fast-menu-item>
</fast-menu>
    <div class="card-placeholder">
        <fast-skeleton style="width: 50px; height: 50px;" shape="circle" pattern="assets/gfx/icons/icon_48.png"></fast-skeleton>
        <fast-skeleton style="border-radius: 4px; margin-top: 10px; height: 10px;" shape="rect"></fast-skeleton>
        <fast-skeleton style="border-radius: 4px; margin-top: 10px; height: 10px;" shape="rect"></fast-skeleton>
        <fast-skeleton style="border-radius: 4px; margin-top: 10px; height: 10px;" shape="rect" ></fast-skeleton>
        <fast-skeleton style="border-radius: 4px;width: 75px;height: 30px;margin-top: 20px;margin-bottom: 10px;" shape="rect" shimmer></fast-skeleton>
    </div>
    <fast-text-field placeholder="name">Input default<span slot="start">1</span><span slot="end">2</span></fast-text-field>
    <fast-tabs orientation="vertical" style="float:left">
    <fast-tab slot="tab">Tab one</fast-tab>
    <fast-tab slot="tab">Tab two</fast-tab>
    <fast-tab slot="tab">Tab three</fast-tab>
    <fast-tab-panel slot="tabpanel">Tab panel 1</fast-tab-panel>
    <fast-tab-panel slot="tabpanel">Tab panel 2</fast-tab-panel>
    <fast-tab-panel slot="tabpanel">Tab panel 3</fast-tab-panel>
</fast-tabs>
<fast-toolbar orientation="vertical" style="float:right"><label slot="label" slot="label">Toolbar</label><span slot="start" slot="start">~a~</span><span slot="end" slot="end">x</span>
    <fast-checkbox>Checkbox</fast-checkbox>
    <fast-checkbox>Checkbox</fast-checkbox>
    <fast-checkbox>Checkbox</fast-checkbox>
</fast-toolbar>
    <fast-progress-ring style="float:left"></fast-progress-ring>  <fast-progress-ring style="float:left" value="${Math.random() * 100}"></fast-progress-ring>
    <br/>
    <fast-switch><span slot="unchecked-message">A</span>X<span slot="checked-message">Z</span></fast-switch>
    <fast-progress></fast-progress>
    <fast-tree-view>
    <fast-tree-item>Tree item 1
        <fast-tree-item style="background:red;" slot="item" slot="item">Tree item 1 - 1</fast-tree-item>
        <fast-tree-item style="background:green;" slot="item" slot="item">Tree item 1 - 2
            <fast-tree-item style="background:blue;" slot="item">Tree item 1 - 2 - 1</fast-tree-item>
        </fast-tree-item>
    </fast-tree-item>
    <fast-tree-item>Tree item 2</fast-tree-item>
</fast-tree-view>
    <style>
      fast-tabs{ background:gray;}
        .card-placeholder {
            padding: 20px;
            border-radius: 4px;
        }
    </style>
</div>
      </div>
    `;
  }
}
