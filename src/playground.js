// Playground ----------------------------------------------------------------------

// class Person {
//     constructor(name, age = 0) {
//         this.name = name;
//         this.age = age;
//     }
//     getGreeting() {
//         return `Hey, ${this.name}`;
//     }
//     getDescription() {
//         return `${this.name} is ${this.age} years old`;
//     }
// }

// class Student extends Person {
//     constructor(name, age, major) {
//         super(name,age);
//         this.major = major;
//     }
//     getDescription() {
//         return `${this.name} is ${this.age} years old and majors in ${this.major} `;
//     }
//     hasMajor() {
//         return !!this.major;
//     }
// }

// class Traveller extends Person {
//     constructor(name, age, homeLocation) {
//         super(name, age);
//         this.homeLocation = homeLocation;
//     }
//     getDescription() {
//         return `${super.getDescription()} and is from ${this.homeLocation}`;
//     }
//     getGreeting() {
//         return `Hey, ${this.name} from ${this.homeLocation}`;
//     }
// }

// const traveller = new Traveller('Holly Johnson',56,'Denver,Colorado');

// console.log(traveller.getDescription());

// console.log(traveller.getGreeting());

// Indecision Application ----------------------------------------------------------

// const app = {
//     title: 'Indecision Application',
//     subTitle: 'Put your hands in the life of a computer',
//     options: []
// };

// const onFormSubmit = (e) => {
//     e.preventDefault();
//     const option = e.target.elements.option.value;
//     if(option) {
//         app.options.push(option);
//     }
//     e.target.elements.option.value = '';
//     renderUI();
// };

// const onRemoveAll = () => {
//     app.options = [];
//     renderUI();
// };

// const onMakeDecision = () => {
//     const randomNumber = Math.floor(Math.random() * app.options.length);
//     const option = app.options[randomNumber];
//     console.log(option);
// };

// const renderUI = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             {app.subTitle && <p>{app.subTitle}</p>}
//             <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//             <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
//             <button onClick={onRemoveAll}>Remove All</button>
//             <ol>
//                 {
//                     app.options.map(option => <li key={option}>{option}</li>)
//                 }
//             </ol>
//             <form onSubmit = {onFormSubmit}>
//                 <input type="text" name="option"/>
//                 <button>Add Option</button>
//              </form>
//          </div>
//     );
//     ReactDOM.render(template,document.querySelector('#app'));
// };

// renderUI();

// ---------------------------------------------------------------------------------

// Visibility Toggle ---------------------------------------------------------------

// class VisibilityToggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
//         this.state = {
//             visibility: false
//         };
//     }
//     handleToggleVisibility() {
//         this.setState((prevState) => {
//             return {
//                 visibility: !prevState.visibility
//             }
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Visibility Toggle</h1>
//                 <button onClick={this.handleToggleVisibility}>
//                     {this.state.visibility ? 'Hide Details' : 'ShowDetails'}
//                 </button>
//                 {
//                     this.state.visibility && (
//                         <div>
//                             <p>Details that must be hidden or not</p>
//                         </div>
//                     )
//                 }
//             </div>
//         );
//     }
// }

// ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// ---------------------------------------------------------------------------------

// Counter --------------------------------------------------------------------

// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleAddOne = this.handleAddOne.bind(this);
//         this.handleMinusOne = this.handleMinusOne.bind(this);
//         this.handleReset = this.handleReset.bind(this);
//         this.state = {
//             count: props.count
//         };
//     }
//     handleAddOne() {
//         this.setState((prevState) => {
//             return {
//                 count: prevState.count + 1
//             };
//         });
//     }
//     handleMinusOne() {
//         this.setState((prevState) => {
//             return {
//                 count: prevState.count - 1
//             };
//         });
//     }
//     handleReset() {
//         this.setState((prevState) => {
//             return {
//                 count: 0
//             };
//         }); 
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Count: {this.state.count}</h1>
//                 <button onClick={this.handleAddOne}>+1</button>
//                 <button onClick={this.handleMinusOne}>-1</button>
//                 <button onClick={this.handleReset}>Reset</button>
//             </div>
//         );
//     }
// }

// Counter.defaultProps = {
//     count: 1
// };

// ReactDOM.render(<Counter count={0}/>,document.getElementById('app'));

// ----------------------------------------------------------------------------

// Counter --------------------------------------------------------------------

// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleAddOne = this.handleAddOne.bind(this);
//         this.handleMinusOne = this.handleMinusOne.bind(this);
//         this.handleReset = this.handleReset.bind(this);
//         this.state = {
//             count: 0
//         };
//     }
//     componentDidMount() {
//         const strCount = localStorage.getItem('count');
//         const count = parseInt(strCount);
//         if(!isNaN(count)) {
//             this.setState(() => ({count}));
//         }
//     }
//     componentDidUpdate(prevProps,prevState) {
//         if(prevState.count !== this.state.count) {
//             localStorage.setItem('count',this.state.count);
//         }
//     }
//     handleAddOne() {
//         this.setState((prevState) => {
//             return {
//                 count: prevState.count + 1
//             };
//         });
//     }
//     handleMinusOne() {
//         this.setState((prevState) => {
//             return {
//                 count: prevState.count - 1
//             };
//         });
//     }
//     handleReset() {
//         this.setState((prevState) => {
//             return {
//                 count: 0
//             };
//         }); 
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Count: {this.state.count}</h1>
//                 <button onClick={this.handleAddOne}>+1</button>
//                 <button onClick={this.handleMinusOne}>-1</button>
//                 <button onClick={this.handleReset}>Reset</button>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<Counter count={0}/>,document.getElementById('app'));

// ----------------------------------------------------------------------------

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({options}));
            }
        } catch(e) {
            
        }
    }
    componentDidUpdate(prevProps,prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    handleDeleteOptions() {
        this.setState(() => ({ options:[]} ));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => (
            {
                options: prevState.options.filter((option) =>  optionToRemove !== option)
            }
        ));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option);
    }
    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } 
        this.setState((prevState) => ({options:prevState.options.concat([option])}));
    } 
    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map(
                    option => (
                        <Option 
                            key={option} optionText={option} 
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    )
                )
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button onClick={(e) => props.handleDeleteOption(props.optionText)}>
                Remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error:undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({error}));
        if(!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));

// -- New ES6 Syntax

// const oldSyntax = new OldSyntax();

// console.log(oldSyntax);

// ----------------------------------------------

// class NewSyntax {
//     name = "Jennifer";
// }

// const newSyntax = new NewSyntax();

// console.log(newSyntax);

// Playground -----------------------------------------------------------------

// const Layout = (props) => {
//     return (
//         <div>
//             <p>Header</p>
//             {props.children}
//             <p>Footer</p>
//         </div>
//     );
// };

// ReactDOM.render((
//     <Layout>
//         <h1>Page Title</h1>
//         <p>This is my page...</p>
//     </Layout>
// ), document.getElementById('app'));

// ----------------------------------------------------------------------------