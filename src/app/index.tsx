import React from "react";
import { TextInput, View } from "react-native";
import ButtonsOperations from "../components/ButtonsOperations";


export default function Index() {
    
    const [operacao, setOperacao] = React.useState("");  
    const [resultado, setResultado] = React.useState("");

    const operar = () => {
        try {
            setResultado(eval(operacao));
        } catch (error) {
           setResultado("Operacao errada");
        }
    }


    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.display, {fontSize: resultado ? 24 : 40}]}
                value={operacao}
                editable={false}
            />
            <TextInput
                style={[styles.display, {fontSize: 40}]}
                value={String(resultado)}
                editable={false}
            />            
                        <View style={{marginTop: 16}}>
                                <ButtonsOperations
                                    onInsert={(s) => setOperacao(prev => prev + s)}
                                    onEvaluate={operar}
                                    onClear={() => {setOperacao(""); setResultado("");}}
                                    onBackspace={() => setOperacao(prev => prev.slice(0, -1))}
                                />
                        </View>
            
        </View>
    )
}




