import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));

let todoListItem = [];
let workingListItem = [];

app.get("/", (req, res) => {
    const path = req.path;
    
    res.render("index.ejs", {
        currentBasic: "active",
        currentWork: "",
        mainColor: "basic-main-color",
        bgColor: "basic-bg-color",
        currentList: "Todo",
        formAction: "/",
        addListButtonMain: "basic-second-color",
        emptyTodoList: "empty-list",
        todoListItem: todoListItem.join(" "),
        dateDefault: `${new Date().toString().substring(8, 10)} ${new Date().toString().substring(4, 7)} ${new Date().toString().substring(11, 15)} - ${new Date().toString().substring(16, 21)}`
    });
})

app.post("/", (req, res) => {
    const addItem = req.body.todoAdd;

    const todoListItemTemplate = `
    <div class="list-item">
        <label><input type="checkbox">
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="checkbox">
                <rect x="0.367676" y="0.22583" width="11.6852" height="11.6852" rx="3"
                    fill="black" fill-opacity="0.4" class="checkbox-fill" />
                <rect x="0.867676" y="0.72583" width="10.6852" height="10.6852" rx="2.5"
                    stroke="black" stroke-opacity="0.3" class="checkbox-outline" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M3.72798 5.51011L3.012 6.2261L5.31541 8.52951L9.40864 4.43628L8.65008 3.67773L5.27284 7.05497L3.72798 5.51011Z"
                    fill="white" class="checkbox-checkmark" />
            </svg>
            <div class="item-text">${addItem}</div>
        </label>
    </div>
    `;

    todoListItem.push(todoListItemTemplate);
    
    res.render("index.ejs", {
        currentBasic: "active",
        currentWork: "",
        mainColor: "basic-main-color",
        bgColor: "basic-bg-color",
        currentList: "Todo",
        formAction: "/",
        addListButtonMain: "basic-second-color",
        emptyTodoList: "empty-list",
        todoListItem: todoListItem.join(" "),
        dateDefault: `${new Date().toString().substring(8, 10)} ${new Date().toString().substring(4, 7)} ${new Date().toString().substring(11, 15)} - ${new Date().toString().substring(16, 21)}`
    });
})

app.get("/work", (req, res) => {
    const path = req.path;
    
    res.render("index.ejs", {
        currentBasic: "",
        currentWork: "active",
        mainColor: "work-main-color",
        bgColor: "work-bg-color",
        currentList: "Working",
        formAction: "/work",
        addListButtonMain: "work-second-color",
        emptyTodoList: "empty-list",
        todoListItem: workingListItem.join(" "),
        dateDefault: `${new Date().toString().substring(8, 10)} ${new Date().toString().substring(4, 7)} ${new Date().toString().substring(11, 15)} - ${new Date().toString().substring(16, 21)}`
    });
})

app.post("/work", (req, res) => {
    const addItem = req.body.todoAdd;

    const todoListItemTemplate = `
    <div class="list-item">
        <label><input type="checkbox">
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="checkbox">
                <rect x="0.367676" y="0.22583" width="11.6852" height="11.6852" rx="3"
                    fill="black" fill-opacity="0.4" class="checkbox-fill" />
                <rect x="0.867676" y="0.72583" width="10.6852" height="10.6852" rx="2.5"
                    stroke="black" stroke-opacity="0.3" class="checkbox-outline" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M3.72798 5.51011L3.012 6.2261L5.31541 8.52951L9.40864 4.43628L8.65008 3.67773L5.27284 7.05497L3.72798 5.51011Z"
                    fill="white" class="checkbox-checkmark" />
            </svg>
            <div class="item-text">${addItem}</div>
        </label>
    </div>
    `;

    workingListItem.push(todoListItemTemplate);
    
    res.render("index.ejs", {
        currentBasic: "",
        currentWork: "active",
        mainColor: "work-main-color",
        bgColor: "work-bg-color",
        currentList: "Working",
        formAction: "/work",
        addListButtonMain: "work-second-color",
        emptyTodoList: "empty-list",
        todoListItem: workingListItem.join(" "),
        dateDefault: `${new Date().toString().substring(8, 10)} ${new Date().toString().substring(4, 7)} ${new Date().toString().substring(11, 15)} - ${new Date().toString().substring(16, 21)}`
    });
})

app.listen(port, () => console.log(`Running on port ${port}`));