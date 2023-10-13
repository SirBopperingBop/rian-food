import { 
    Block, 
    Button, 
    Link, 
    List, 
    ListInput, 
    ListItem, 
    NavLeft, 
    NavTitle, 
    Navbar, 
    Page, 
    f7
} from "framework7-react";
import React, { useState } from "react";
import formStructure from ".././json/formStructure.json"
import { supabase } from "../js/routes";

export default function FoodForm({tableName, preData}) {
    const [formData, setFormData] = useState({...preData})
    console.log(formData);
    const currentStructure = formStructure[tableName]

    const submitFormData = async () => {
        try {
            const { data, error } = await supabase
                .from(tableName)
                .upsert(formData)
            console.log(error, data)
            location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    
    const promptSubmit = () => {
        f7.dialog.confirm(`Are you sure?`, () => submitFormData());
    };

    

    function toProperCap(string) {
        return string[0].toUpperCase() + string.slice(1)
    }

    return (
        <Page>
            <Navbar className="navbar navbar-page">
                <NavLeft>
                    <Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
                </NavLeft>
                <NavTitle>
                    {toProperCap(tableName)} form
                </NavTitle>
            </Navbar>
            <Block>
                <List 
                    mediaList
                    strongIos
                    outlineIos
                    dividersIos
                    form
                    formStoreData
                >
                    {
                        Object.keys(currentStructure).map((key, index) => {
                            let returnedComponent;
                            const type = currentStructure[key].type || ""
                            const label = currentStructure[key].label || ""
                            switch (type) {
                                case "input":
                                    returnedComponent = (
                                        <ListInput 
                                            key={`${index}-${key}`}
                                            type={currentStructure[key].inputType} 
                                            label={label}
                                            value={formData[key] || ""}
                                            onChange={e => setFormData(prevState => {
                                                return {
                                                    ...prevState,
                                                    [key]: e.target.value
                                                }
                                            })}
                                        ></ListInput>
                                    )
                                    break;
                                case "boolean":
                                    returnedComponent = (
                                        <ListItem 
                                            key={`${index}-${key}`}
                                            checkbox 
                                            title={label}
                                            checked={formData[key] || false}
                                            onChange={() => setFormData(prevState => {
                                                return {
                                                    ...prevState,
                                                    [key]: !prevState[key]
                                                }
                                            })}
                                        ></ListItem>
                                    )
                                    break;
                                default:
                                    returnedComponent = (
                                        <p>Error loading {key}...</p>
                                    )
                                    break;
                            }
                            return returnedComponent
                        })
                    }
                </List>
                <Button fill bgColor="teal" onClick={promptSubmit}>Submit Form</Button>
            </Block>
        </Page>
    )
}