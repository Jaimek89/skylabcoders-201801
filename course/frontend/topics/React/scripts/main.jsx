
// Forma de excritura nativa de React (sin JSX)

/*'use strict';

ReactDOM.render(
    React.createElement('main', null, 
        React.createElement('section', null, 
            React.createElement('h1', null,'Hello, World!')
        )
    ), document.getElementById('root'))*/

'use strict';

const helloWorld ='Hello, World!!!!!!!!!!!!!!!!!!!!!'

function salutation(){
    return helloWorld
}

function salute(){
    alert(helloWorld)
}

ReactDOM.render(
    <main>
        <section>
            {/*<h1>{ HelloWorld }</h1>*/}
            {salutation()}
            <hr />
            <button className="round-red-button" onClick={salute}>salute</button>
        </section>
    </main>,
    document.getElementById('root')
)