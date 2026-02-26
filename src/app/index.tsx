import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import LayoutBotoes from './layoutBotoes';

export default function Index() {
    
    const [operacao, setOperacao] = React.useState("");  // Initialize as empty string
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
                                <LayoutBotoes
                                    onInsert={(s) => setOperacao(prev => prev + s)}
                                    onEvaluate={operar}
                                    onClear={() => {setOperacao(""); setResultado("");}}
                                    onBackspace={() => setOperacao(prev => prev.slice(0, -1))}
                                />
                        </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#17181A",
        padding: 20,
        flex: 1,
        justifyContent: "flex-end",
    
    },
    display: {
        color: "white",
        //flex: 1,
        fontSize: 24,
        textAlign: "right",
        paddingHorizontal: 0,
        paddingVertical: 5,

    }   
    
});


