import { Block } from "framework7-react";
import React from "react";
import formStructure from "../../json/formStructure.json"
import { supabase } from "@supabase/auth-ui-shared";

export default function FoodForm({tableName}) {
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
        <Block>
            <h1>Hello world!</h1>
        </Block>
    )
}