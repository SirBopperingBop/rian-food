import { 
    Block, 
    Link, 
    List, 
    ListInput, 
    ListItem, 
    NavLeft, 
    NavTitle, 
    Navbar, 
    Page 
} from "framework7-react";
import React from "react";
import formStructure from ".././json/formStructure.json"
import { supabase } from "@supabase/auth-ui-shared";

export default function FoodForm({tableName, preData}) {
    const currentStructure = formStructure[tableName]
    console.log(JSON.stringify(currentStructure))

    const submitFormData = async () => {
        try {
            const { data, error } = await supabase
                .from(tableName)
                .upsert(formData)
            console.log(error, data)
        } catch (error) {
            console.log(error)
        }
        location.reload()
    }

    return (
        <Page>
            <Navbar className="navbar navbar-page">
                <NavLeft>
                    <Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
                </NavLeft>
                <NavTitle>
                    Editing {tableName}
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
                        Object.keys(currentStructure).map(key => {
                            let returnedComponent;
                            const type = currentStructure[key].type || ""
                            const label = currentStructure[key].label || ""
                            switch (type) {
                                case "input":
                                    returnedComponent = (
                                        <ListInput type={currentStructure[key].inputType} label={label}></ListInput>
                                    )
                                    break;
                                case "boolean":
                                    returnedComponent = (
                                        <ListItem checkbox title={label}></ListItem>
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
            </Block>
        </Page>
    )
}