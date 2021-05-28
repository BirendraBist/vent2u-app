'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">vent2u-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c30e8e64cd93594539dcbac04b36652c"' : 'data-target="#xs-components-links-module-AppModule-c30e8e64cd93594539dcbac04b36652c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c30e8e64cd93594539dcbac04b36652c"' :
                                            'id="xs-components-links-module-AppModule-c30e8e64cd93594539dcbac04b36652c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CountdownPageModule.html" data-type="entity-link">CountdownPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CountdownPageModule-01140c759ed025a981151f82c2b99978"' : 'data-target="#xs-components-links-module-CountdownPageModule-01140c759ed025a981151f82c2b99978"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CountdownPageModule-01140c759ed025a981151f82c2b99978"' :
                                            'id="xs-components-links-module-CountdownPageModule-01140c759ed025a981151f82c2b99978"' }>
                                            <li class="link">
                                                <a href="components/CountdownPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CountdownPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CountdownPageRoutingModule.html" data-type="entity-link">CountdownPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-5d521c8f9c231def9683955e0b56b067"' : 'data-target="#xs-components-links-module-HomePageModule-5d521c8f9c231def9683955e0b56b067"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-5d521c8f9c231def9683955e0b56b067"' :
                                            'id="xs-components-links-module-HomePageModule-5d521c8f9c231def9683955e0b56b067"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link">HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link">LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-71802c1ae9bef4e16a1db80b0b429185"' : 'data-target="#xs-components-links-module-LoginPageModule-71802c1ae9bef4e16a1db80b0b429185"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-71802c1ae9bef4e16a1db80b0b429185"' :
                                            'id="xs-components-links-module-LoginPageModule-71802c1ae9bef4e16a1db80b0b429185"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link">LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PopoverPageModule.html" data-type="entity-link">PopoverPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PopoverPageModule-4cd51fc1582a06537ca491566bc5e726"' : 'data-target="#xs-components-links-module-PopoverPageModule-4cd51fc1582a06537ca491566bc5e726"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PopoverPageModule-4cd51fc1582a06537ca491566bc5e726"' :
                                            'id="xs-components-links-module-PopoverPageModule-4cd51fc1582a06537ca491566bc5e726"' }>
                                            <li class="link">
                                                <a href="components/PopoverPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PopoverPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PopoverPageRoutingModule.html" data-type="entity-link">PopoverPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PreferencePageModule.html" data-type="entity-link">PreferencePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PreferencePageModule-836c83c3ee78a7702410bf4da054e4a7"' : 'data-target="#xs-components-links-module-PreferencePageModule-836c83c3ee78a7702410bf4da054e4a7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PreferencePageModule-836c83c3ee78a7702410bf4da054e4a7"' :
                                            'id="xs-components-links-module-PreferencePageModule-836c83c3ee78a7702410bf4da054e4a7"' }>
                                            <li class="link">
                                                <a href="components/PreferencePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PreferencePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PreferencePageRoutingModule.html" data-type="entity-link">PreferencePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ResultsPageModule.html" data-type="entity-link">ResultsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResultsPageModule-449690bd21cac906384d33143d43c106"' : 'data-target="#xs-components-links-module-ResultsPageModule-449690bd21cac906384d33143d43c106"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResultsPageModule-449690bd21cac906384d33143d43c106"' :
                                            'id="xs-components-links-module-ResultsPageModule-449690bd21cac906384d33143d43c106"' }>
                                            <li class="link">
                                                <a href="components/ResultsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResultsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResultsPageRoutingModule.html" data-type="entity-link">ResultsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RoomsPageModule.html" data-type="entity-link">RoomsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RoomsPageModule-022e7117ae77e12fbade0d197a5a2e0d"' : 'data-target="#xs-components-links-module-RoomsPageModule-022e7117ae77e12fbade0d197a5a2e0d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RoomsPageModule-022e7117ae77e12fbade0d197a5a2e0d"' :
                                            'id="xs-components-links-module-RoomsPageModule-022e7117ae77e12fbade0d197a5a2e0d"' }>
                                            <li class="link">
                                                <a href="components/RoomsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoomsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoomsPageRoutingModule.html" data-type="entity-link">RoomsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SetupPageModule.html" data-type="entity-link">SetupPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SetupPageModule-637624415b799bec2c0b50eebb03bec6"' : 'data-target="#xs-components-links-module-SetupPageModule-637624415b799bec2c0b50eebb03bec6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SetupPageModule-637624415b799bec2c0b50eebb03bec6"' :
                                            'id="xs-components-links-module-SetupPageModule-637624415b799bec2c0b50eebb03bec6"' }>
                                            <li class="link">
                                                <a href="components/SetupPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SetupPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SetupPageRoutingModule.html" data-type="entity-link">SetupPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SliderAirqialityPageModule.html" data-type="entity-link">SliderAirqialityPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SliderAirqialityPageModule-ef5a2eb435a7cda0cb74704f44d3345d"' : 'data-target="#xs-components-links-module-SliderAirqialityPageModule-ef5a2eb435a7cda0cb74704f44d3345d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SliderAirqialityPageModule-ef5a2eb435a7cda0cb74704f44d3345d"' :
                                            'id="xs-components-links-module-SliderAirqialityPageModule-ef5a2eb435a7cda0cb74704f44d3345d"' }>
                                            <li class="link">
                                                <a href="components/SliderAirqialityPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SliderAirqialityPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SliderAirqialityPageRoutingModule.html" data-type="entity-link">SliderAirqialityPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SliderColdPageModule.html" data-type="entity-link">SliderColdPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SliderColdPageModule-3454365646aeca8e4577e5aeacbc1075"' : 'data-target="#xs-components-links-module-SliderColdPageModule-3454365646aeca8e4577e5aeacbc1075"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SliderColdPageModule-3454365646aeca8e4577e5aeacbc1075"' :
                                            'id="xs-components-links-module-SliderColdPageModule-3454365646aeca8e4577e5aeacbc1075"' }>
                                            <li class="link">
                                                <a href="components/SliderColdPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SliderColdPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SliderColdPageRoutingModule.html" data-type="entity-link">SliderColdPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SliderDryPageModule.html" data-type="entity-link">SliderDryPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SliderDryPageModule-a6197d682afed53c4a748edf2adc28f4"' : 'data-target="#xs-components-links-module-SliderDryPageModule-a6197d682afed53c4a748edf2adc28f4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SliderDryPageModule-a6197d682afed53c4a748edf2adc28f4"' :
                                            'id="xs-components-links-module-SliderDryPageModule-a6197d682afed53c4a748edf2adc28f4"' }>
                                            <li class="link">
                                                <a href="components/SliderDryPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SliderDryPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SliderDryPageRoutingModule.html" data-type="entity-link">SliderDryPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SliderMoistPageModule.html" data-type="entity-link">SliderMoistPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SliderMoistPageModule-f0f2cef3150b9fa3282eb1599430a978"' : 'data-target="#xs-components-links-module-SliderMoistPageModule-f0f2cef3150b9fa3282eb1599430a978"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SliderMoistPageModule-f0f2cef3150b9fa3282eb1599430a978"' :
                                            'id="xs-components-links-module-SliderMoistPageModule-f0f2cef3150b9fa3282eb1599430a978"' }>
                                            <li class="link">
                                                <a href="components/SliderMoistPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SliderMoistPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SliderMoistPageRoutingModule.html" data-type="entity-link">SliderMoistPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SliderWarmPageModule.html" data-type="entity-link">SliderWarmPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SliderWarmPageModule-c1b8537f77ddc69afc4e15f426c74495"' : 'data-target="#xs-components-links-module-SliderWarmPageModule-c1b8537f77ddc69afc4e15f426c74495"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SliderWarmPageModule-c1b8537f77ddc69afc4e15f426c74495"' :
                                            'id="xs-components-links-module-SliderWarmPageModule-c1b8537f77ddc69afc4e15f426c74495"' }>
                                            <li class="link">
                                                <a href="components/SliderWarmPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SliderWarmPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SliderWarmPageRoutingModule.html" data-type="entity-link">SliderWarmPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TutorialAcceptPageModule.html" data-type="entity-link">TutorialAcceptPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TutorialAcceptPageModule-d8ae00ba7eb98296ea5b79afb9180e66"' : 'data-target="#xs-components-links-module-TutorialAcceptPageModule-d8ae00ba7eb98296ea5b79afb9180e66"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TutorialAcceptPageModule-d8ae00ba7eb98296ea5b79afb9180e66"' :
                                            'id="xs-components-links-module-TutorialAcceptPageModule-d8ae00ba7eb98296ea5b79afb9180e66"' }>
                                            <li class="link">
                                                <a href="components/TutorialAcceptPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TutorialAcceptPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TutorialAcceptPageRoutingModule.html" data-type="entity-link">TutorialAcceptPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TutorialPageModule.html" data-type="entity-link">TutorialPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TutorialPageModule-02da5ea4941941e8debb3146a5167d22"' : 'data-target="#xs-components-links-module-TutorialPageModule-02da5ea4941941e8debb3146a5167d22"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TutorialPageModule-02da5ea4941941e8debb3146a5167d22"' :
                                            'id="xs-components-links-module-TutorialPageModule-02da5ea4941941e8debb3146a5167d22"' }>
                                            <li class="link">
                                                <a href="components/TutorialPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TutorialPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TutorialPageRoutingModule.html" data-type="entity-link">TutorialPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserpreferencePageModule.html" data-type="entity-link">UserpreferencePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserpreferencePageModule-43f25eae9bcee51765ecdcd99e4d0ecb"' : 'data-target="#xs-components-links-module-UserpreferencePageModule-43f25eae9bcee51765ecdcd99e4d0ecb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserpreferencePageModule-43f25eae9bcee51765ecdcd99e4d0ecb"' :
                                            'id="xs-components-links-module-UserpreferencePageModule-43f25eae9bcee51765ecdcd99e4d0ecb"' }>
                                            <li class="link">
                                                <a href="components/UserpreferencePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserpreferencePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserpreferencePageRoutingModule.html" data-type="entity-link">UserpreferencePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ZonesPageModule.html" data-type="entity-link">ZonesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ZonesPageModule-14c5bf7033af302563aa53d48bf3475c"' : 'data-target="#xs-components-links-module-ZonesPageModule-14c5bf7033af302563aa53d48bf3475c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ZonesPageModule-14c5bf7033af302563aa53d48bf3475c"' :
                                            'id="xs-components-links-module-ZonesPageModule-14c5bf7033af302563aa53d48bf3475c"' }>
                                            <li class="link">
                                                <a href="components/ZonesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ZonesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ZonesPageRoutingModule.html" data-type="entity-link">ZonesPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthConstant.html" data-type="entity-link">AuthConstant</a>
                            </li>
                            <li class="link">
                                <a href="classes/Room.html" data-type="entity-link">Room</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPreference.html" data-type="entity-link">UserPreference</a>
                            </li>
                            <li class="link">
                                <a href="classes/Zone.html" data-type="entity-link">Zone</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/FirebaseService.html" data-type="entity-link">FirebaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoomService.html" data-type="entity-link">RoomService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ZoneService.html" data-type="entity-link">ZoneService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/UserData.html" data-type="entity-link">UserData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});