function Hello({name, message, emoji}) {
    return (
        <div>
            <h1>
                {name} {emoji} {message}!
            </h1>
        </div>
    );
}

export default Hello;