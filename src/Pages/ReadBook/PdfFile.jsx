/* eslint-disable no-unused-vars */
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const styles = StyleSheet.create({

    body: {

        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35

    },
    title: {

        fontSize: 24,
        textAlign: "center"

    },
    text: {

        margin: 12,
        fontSize: 14,
        textAlign: "justify",

    },
    image: {

        marginVertical: 15,
        marginHorizontal: 100
    },
    header: {

        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey"

    },
    pageNumber: {

        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey"

    }

})

const PdfFile = () => {

    const { id } = useParams()
    const [bookDetails, setBookDetails] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch(`http://localhost:5000/book`);
            const data = await response.json();
            const filteredProducts = data.filter((item) => item._id === id);
            setBookDetails(filteredProducts[0]);



        };

        fetchData();
    }, [id]);

    const { _id, name, category, quantity, AuthorsName, short, photo,bookContent } = bookDetails || {}

    console.log(bookDetails)

    return (
        <div>
            <Document>
                <Page style={styles.body}>
                   <div className='flex justify-center text-3xl font-extrabold text-[#E59285] mb-4'>
                   <Text >
                        {name}
                    </Text>
                   </div>
                <div className='flex justify-center mb-4'>
                <Image style={styles.image} src={photo} />
                        <img className='w-96 h-96' src={photo} alt="" />
                </div>
                    <div className='max-w-2xl mx-auto text-2xl overflow-hidden font-semibold'>
                    <Text style={styles.text}>
                    {bookContent}
                    </Text>
                    </div>
                    <Text style={styles.pageNumber} render={({pageNumber,totalPages})=> `${pageNumber} / ${totalPages}` } fixed>
                        
                    </Text>
                </Page>
            </Document>
        </div>
    );
};

export default PdfFile;