function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form Submitted");
} 

export default function Form(){
    return (<form onClick={handleFormSubmit}>
        <input placeholder="Write something"/>
        <button>Submit</button>
    </form>)
}