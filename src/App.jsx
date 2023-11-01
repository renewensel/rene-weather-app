import "./App.css";

function App() {
    return (
        <>
            <div>
                <form>
                    <h1>Weather Mood App</h1>
                    <div>
                        <h4>Add an activity:</h4>

                        <label htmlFor="name">Name: </label>
                        <input
                            required
                            type="text"
                            placeholder="Add a new activity here..."
                            id="name"
                            name="name"
                            maxlength="30"
                            minlength="2"
                        />
                    </div>
                    <div>
                        <label htmlFor="checkbox">Good weather activity?</label>
                        <input type="checkbox" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default App;
