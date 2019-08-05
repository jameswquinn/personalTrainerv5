/** @jsx h */
import { h, Component, render } from "preact";

export default class Masthead extends Component {

    render() {
        return (
                <div id="masthead">
                    <a aria-label="tel 2345" onClick={this.vibrateOnClick} href="tel:2345">
                        <svg class="phone__logo" viewBox="0 0 26 32">
                            <path d="M14.157 3.123c2.227 0 4.301 0.87 5.888 2.432 1.562 1.562 2.432 3.686 2.432 5.862 0 0.64 0.512 1.152 1.152 1.152 0 0 0 0 0 0 0.64 0 1.152-0.512 1.152-1.152 0.026-2.79-1.101-5.53-3.098-7.526-2.022-1.946-4.685-3.072-7.526-3.072-0.64 0-1.152 0.512-1.152 1.152s0.512 1.152 1.152 1.152z" />
                            <path d="M14.157 7.552c1.050 0 2.022 0.41 2.765 1.152s1.152 1.715 1.152 2.765c0 0.64 0.512 1.152 1.152 1.152s1.152-0.512 1.152-1.152c0-1.664-0.64-3.226-1.818-4.403s-2.739-1.818-4.403-1.818c-0.64 0-1.152 0.512-1.152 1.152s0.512 1.152 1.152 1.152z" />
                            <path d="M24.064 18.304l-4.966-2.56c-0.691-0.358-1.562-0.179-2.048 0.435l-1.818 2.33c-1.766-0.947-3.123-1.869-4.685-3.43-1.664-1.664-2.56-3.046-3.482-4.762l2.304-1.792c0.614-0.486 0.819-1.357 0.435-2.048l-2.534-4.941c-0.461-0.87-1.562-1.152-2.355-0.614l-3.174 2.099c-0.717 0.486-1.126 1.331-1.075 2.202 0.051 0.896 0.179 2.022 0.384 2.816 0.922 3.533 3.123 7.194 6.221 10.291 3.098 3.123 6.758 5.325 10.291 6.246 0.794 0.205 1.92 0.307 2.842 0.384 0.896 0.051 1.741-0.384 2.227-1.126l2.048-3.2c0.538-0.819 0.23-1.894-0.614-2.33z" />
                        </svg>
                    </a>
                    <svg id="branding__logo" class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 32">
                        <path transform="matrix(.65,0,0,.65,35,10.5)"
                            d="M58.81 24.734v-8.806l-1.145-0.133c-0.15-0.034-0.269-0.085-0.358-0.153-0.089-0.075-0.133-0.181-0.133-0.317v-0.747h1.636v-0.573c0-0.634 0.099-1.214 0.297-1.739 0.198-0.532 0.494-0.989 0.89-1.37s0.886-0.678 1.473-0.89c0.593-0.211 1.278-0.317 2.056-0.317 0.259 0 0.525 0.017 0.798 0.051s0.508 0.085 0.706 0.153l-0.072 0.951c-0.007 0.068-0.034 0.116-0.082 0.143-0.041 0.027-0.099 0.044-0.174 0.051s-0.17 0.010-0.286 0.010c-0.109-0.007-0.235-0.010-0.378-0.010-1.214 0-2.093 0.252-2.639 0.757-0.545 0.498-0.818 1.251-0.818 2.26v0.522h6.259v10.156h-1.831v-8.836h-4.377v8.836h-1.82zM71.977 24.898c-0.818 0-1.449-0.228-1.892-0.685-0.436-0.457-0.654-1.115-0.654-1.974v-6.341h-1.248c-0.109 0-0.201-0.031-0.276-0.092-0.075-0.068-0.112-0.17-0.112-0.307v-0.726l1.698-0.215 0.419-3.201c0.020-0.102 0.065-0.184 0.133-0.245 0.075-0.068 0.17-0.102 0.286-0.102h0.92v3.569h2.997v1.319h-2.997v6.218c0 0.436 0.106 0.76 0.317 0.972s0.484 0.317 0.818 0.317c0.191 0 0.355-0.024 0.491-0.072 0.143-0.055 0.266-0.113 0.368-0.174s0.188-0.116 0.256-0.164c0.075-0.055 0.14-0.082 0.194-0.082 0.095 0 0.181 0.058 0.256 0.174l0.532 0.869c-0.314 0.293-0.692 0.525-1.135 0.695-0.443 0.164-0.9 0.246-1.37 0.246zM75.105 24.734v-10.36h1.094c0.259 0 0.419 0.126 0.481 0.378l0.143 1.125c0.45-0.498 0.955-0.9 1.514-1.207s1.203-0.46 1.933-0.46c0.566 0 1.064 0.095 1.493 0.286 0.436 0.184 0.798 0.45 1.084 0.798 0.293 0.341 0.515 0.753 0.665 1.238s0.225 1.019 0.225 1.606v6.596h-1.831v-6.596c0-0.784-0.181-1.391-0.542-1.82-0.355-0.436-0.897-0.655-1.626-0.655-0.545 0-1.053 0.13-1.524 0.389-0.464 0.259-0.89 0.61-1.278 1.053v7.629h-1.831zM89.732 14.211c0.621 0 1.193 0.106 1.718 0.317 0.532 0.204 0.989 0.505 1.371 0.9 0.388 0.389 0.692 0.873 0.91 1.452 0.218 0.573 0.327 1.227 0.327 1.964 0 0.286-0.031 0.477-0.092 0.573s-0.178 0.143-0.347 0.143h-6.924c0.014 0.655 0.102 1.224 0.266 1.708s0.389 0.89 0.675 1.217c0.286 0.32 0.627 0.563 1.023 0.726 0.395 0.157 0.839 0.235 1.329 0.235 0.457 0 0.849-0.051 1.176-0.153 0.334-0.109 0.621-0.225 0.86-0.348s0.436-0.235 0.593-0.337c0.164-0.109 0.304-0.164 0.419-0.164 0.15 0 0.266 0.058 0.348 0.174l0.511 0.665c-0.224 0.273-0.494 0.511-0.808 0.716-0.314 0.198-0.651 0.361-1.012 0.491-0.355 0.13-0.723 0.225-1.105 0.286-0.382 0.068-0.76 0.102-1.135 0.102-0.716 0-1.377-0.119-1.984-0.358-0.6-0.245-1.122-0.6-1.565-1.064-0.436-0.47-0.777-1.050-1.023-1.739s-0.368-1.479-0.368-2.373c0-0.723 0.109-1.398 0.327-2.025 0.225-0.627 0.545-1.169 0.961-1.626 0.416-0.464 0.924-0.825 1.524-1.084 0.6-0.266 1.275-0.399 2.025-0.399zM89.773 15.55c-0.879 0-1.572 0.256-2.076 0.767-0.505 0.505-0.818 1.207-0.941 2.107h5.666c0-0.423-0.061-0.808-0.184-1.156-0.116-0.354-0.29-0.658-0.521-0.91-0.225-0.259-0.501-0.457-0.828-0.593-0.327-0.143-0.699-0.215-1.115-0.215zM101.305 16.082c-0.081 0.15-0.208 0.225-0.378 0.225-0.102 0-0.218-0.038-0.347-0.113s-0.29-0.157-0.48-0.246c-0.184-0.095-0.406-0.181-0.666-0.256-0.259-0.082-0.565-0.123-0.92-0.123-0.307 0-0.583 0.041-0.829 0.123-0.245 0.075-0.457 0.181-0.634 0.317-0.17 0.136-0.304 0.297-0.399 0.481-0.088 0.177-0.133 0.372-0.133 0.583 0 0.266 0.076 0.487 0.225 0.665 0.157 0.177 0.362 0.331 0.614 0.46s0.539 0.245 0.86 0.348c0.32 0.095 0.647 0.201 0.981 0.317 0.341 0.109 0.672 0.232 0.993 0.368s0.606 0.307 0.859 0.511c0.253 0.204 0.453 0.457 0.604 0.757 0.157 0.293 0.235 0.648 0.235 1.064 0 0.477-0.086 0.92-0.256 1.33-0.17 0.402-0.422 0.753-0.757 1.053-0.334 0.293-0.743 0.525-1.227 0.695s-1.043 0.256-1.677 0.256c-0.722 0-1.377-0.116-1.964-0.348-0.586-0.239-1.084-0.542-1.492-0.91l0.429-0.696c0.055-0.089 0.119-0.157 0.194-0.204s0.17-0.072 0.286-0.072c0.123 0 0.253 0.048 0.388 0.143s0.3 0.201 0.491 0.317c0.198 0.116 0.436 0.222 0.716 0.317s0.627 0.143 1.043 0.143c0.355 0 0.665-0.044 0.931-0.133 0.266-0.095 0.488-0.222 0.665-0.378s0.307-0.337 0.389-0.542c0.088-0.204 0.132-0.423 0.132-0.654 0-0.286-0.078-0.522-0.235-0.706-0.15-0.191-0.351-0.351-0.604-0.481-0.252-0.136-0.542-0.252-0.869-0.348-0.321-0.102-0.651-0.208-0.992-0.317-0.335-0.109-0.665-0.232-0.992-0.368-0.321-0.143-0.607-0.32-0.86-0.532s-0.457-0.47-0.614-0.777c-0.15-0.314-0.224-0.692-0.224-1.135 0-0.395 0.081-0.774 0.245-1.135 0.163-0.368 0.402-0.689 0.716-0.961 0.314-0.28 0.699-0.501 1.156-0.665s0.978-0.245 1.564-0.245c0.682 0 1.292 0.109 1.831 0.327 0.545 0.211 1.016 0.505 1.411 0.88l-0.409 0.665zM109.132 16.082c-0.082 0.15-0.209 0.225-0.378 0.225-0.103 0-0.219-0.038-0.348-0.113s-0.29-0.157-0.48-0.246c-0.184-0.095-0.406-0.181-0.665-0.256-0.259-0.082-0.566-0.123-0.921-0.123-0.306 0-0.583 0.041-0.829 0.123-0.245 0.075-0.457 0.181-0.634 0.317-0.17 0.136-0.304 0.297-0.399 0.481-0.088 0.177-0.132 0.372-0.132 0.583 0 0.266 0.075 0.487 0.224 0.665 0.157 0.177 0.362 0.331 0.614 0.46s0.538 0.245 0.859 0.348c0.32 0.095 0.647 0.201 0.982 0.317 0.341 0.109 0.671 0.232 0.992 0.368s0.606 0.307 0.859 0.511c0.253 0.204 0.453 0.457 0.604 0.757 0.157 0.293 0.235 0.648 0.235 1.064 0 0.477-0.085 0.92-0.255 1.33-0.17 0.402-0.423 0.753-0.758 1.053-0.334 0.293-0.743 0.525-1.227 0.695s-1.043 0.256-1.677 0.256c-0.723 0-1.378-0.116-1.964-0.348-0.586-0.239-1.084-0.542-1.493-0.91l0.429-0.696c0.055-0.089 0.119-0.157 0.194-0.204s0.17-0.072 0.286-0.072c0.123 0 0.253 0.048 0.389 0.143s0.3 0.201 0.49 0.317c0.198 0.116 0.437 0.222 0.716 0.317s0.627 0.143 1.044 0.143c0.354 0 0.665-0.044 0.93-0.133 0.266-0.095 0.488-0.222 0.666-0.378s0.306-0.337 0.388-0.542c0.088-0.204 0.133-0.423 0.133-0.654 0-0.286-0.078-0.522-0.235-0.706-0.15-0.191-0.352-0.351-0.604-0.481-0.253-0.136-0.542-0.252-0.87-0.348-0.32-0.102-0.651-0.208-0.992-0.317-0.334-0.109-0.665-0.232-0.992-0.368-0.321-0.143-0.607-0.32-0.859-0.532s-0.457-0.47-0.614-0.777c-0.15-0.314-0.225-0.692-0.225-1.135 0-0.395 0.082-0.774 0.245-1.135 0.164-0.368 0.402-0.689 0.716-0.961 0.314-0.28 0.699-0.501 1.156-0.665s0.978-0.245 1.564-0.245c0.682 0 1.292 0.109 1.831 0.327 0.546 0.211 1.017 0.505 1.411 0.88l-0.408 0.665z">
                        </path>
                        <path transform="matrix(.62,0,0,.62,72,0)"
                            d="M11.382 21.818c0.428 0 0.782 0.14 1.062 0.42 0.296 0.263 0.444 0.609 0.444 1.037 0 0.412-0.148 0.757-0.444 1.037-0.28 0.263-0.634 0.395-1.062 0.395h-8.024c-0.428 0-0.79-0.14-1.086-0.42-0.28-0.296-0.42-0.658-0.42-1.086v-14.271c0-0.428 0.148-0.782 0.444-1.062 0.296-0.296 0.675-0.444 1.136-0.444 0.411 0 0.765 0.148 1.062 0.444 0.296 0.28 0.444 0.634 0.444 1.062v12.889h6.444zM18.185 7.423c1.547 0 2.872 0.387 3.975 1.16 1.119 0.757 1.967 1.794 2.543 3.111 0.593 1.3 0.889 2.757 0.889 4.37s-0.296 3.078-0.889 4.395c-0.576 1.3-1.424 2.337-2.543 3.111-1.103 0.757-2.428 1.136-3.975 1.136h-5.901c-0.428 0-0.79-0.14-1.086-0.42-0.28-0.296-0.42-0.658-0.42-1.086v-14.271c0-0.428 0.14-0.782 0.42-1.062 0.296-0.296 0.658-0.444 1.086-0.444h5.901zM17.938 21.867c1.481 0 2.593-0.543 3.333-1.63 0.741-1.103 1.111-2.494 1.111-4.173s-0.379-3.062-1.136-4.148c-0.741-1.103-1.844-1.654-3.309-1.654h-4.074v11.605h4.074zM36.601 7.423c0.395 0 0.716 0.132 0.963 0.395s0.37 0.593 0.37 0.988v14.395c0 0.428-0.148 0.79-0.444 1.086-0.28 0.28-0.634 0.42-1.062 0.42-0.23 0-0.461-0.033-0.691-0.099-0.214-0.082-0.37-0.189-0.469-0.321l-9.061-11.506v10.543c0 0.395-0.132 0.724-0.395 0.988-0.247 0.263-0.576 0.395-0.988 0.395-0.395 0-0.716-0.132-0.963-0.395s-0.37-0.593-0.37-0.988v-14.395c0-0.428 0.14-0.782 0.42-1.062 0.296-0.296 0.658-0.444 1.086-0.444 0.247 0 0.486 0.049 0.716 0.148 0.247 0.099 0.428 0.23 0.543 0.395l8.987 11.457v-10.617c0-0.395 0.123-0.724 0.37-0.988 0.263-0.263 0.593-0.395 0.988-0.395z">
                        </path>
                        <path transform="matrix(.62,0,0,.62,72,0)"
                            d="M53.952 24.751h-3.171l-3.171-2.718-3.171 2.718h-3.171c-0.453 0-0.906-0.181-1.178-0.453-0.362-0.362-0.453-0.725-0.453-1.178v-7.157c0-0.453 0.181-0.906 0.453-1.178l0.091-0.091 7.519-6.342 7.61 6.342c0.272 0.272 0.453 0.725 0.453 1.178v7.157c0 0.453-0.181 0.906-0.453 1.178-0.453 0.362-0.906 0.544-1.359 0.544zM51.506 22.849h2.265v-6.795l-6.16-5.164-6.16 5.164v6.795h2.174l3.896-3.261 3.986 3.261z">
                        </path>
                    </svg>
                </div>
        );
    }
}