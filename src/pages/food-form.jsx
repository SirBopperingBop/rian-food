import { 
    Block, 
    Link, 
    NavLeft, 
    NavTitle, 
    Navbar, 
    Page 
} from "framework7-react";
import React from "react";
import formStructure from ".././json/formStructure.json"
import { supabase } from "@supabase/auth-ui-shared";

export default function FoodForm({tableName, preData}) {
    console.log(JSON.stringify(formStructure))

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
                <h1>Hello world!</h1>
                <p>In laborum laborum dolore nulla laboris enim labore sint est consectetur ullamco nulla. Occaecat laborum enim tempor ipsum laborum dolor ut nulla tempor proident culpa magna sint. Ipsum mollit Lorem cillum amet id non in Lorem in. Consectetur exercitation nulla ex adipisicing mollit nostrud. Pariatur culpa in amet non fugiat anim dolor nulla dolore adipisicing in aliquip. Laborum nulla nostrud magna ullamco. Eiusmod et ullamco et voluptate ipsum culpa mollit incididunt laborum laboris est fugiat proident proident.</p>
            </Block>
        </Page>
    )
}