import React, {useState} from 'react';
import {Backdrop, Button, CircularProgress, Grid, Chip, Stack,} from "@mui/material";
import {AspectRatio, Card, Textarea} from "@mui/joy";
import api from "../../utils/axiosSetting";
import Box from "@mui/material/Box";
import './textToImg.scss'
import textToImgEx from "../../utils/examples/textToImgEx";
import Typography from "@mui/material/Typography";

const TextToImg = () => {
    const [text, setText] = useState("");
    const [images, setImages] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleConvert = async () => {
        setLoading(true);
        try{
            const res = await api.post('/text/img',{
                description: text
            })
            setImages(res.data.info)
            setLoading(false);
        } catch (e) {
            console.log(e)
            setLoading(false);
        }
    }

    const handleDiscard = async (img) => {
        images.splice(images.indexOf(img), 1)
        if (images.length === 0) {
            setImages(null)
        } else {
            setImages([...images])
        }
    }

    const handleDownload = async (url) => {
        const res = await api.get(url, {
            responseType: 'blob'
        })
        const urlCreator = window.URL || window.webkitURL;
        const element = document.createElement('a');
        element.href = urlCreator.createObjectURL(res.data);
        element.download = "text-to-img" + Date.now() + ".png";

        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    const handleClick = async (text) => {
        setText(text)
    }

    return (
        <Grid>
            <Grid item display='flex'  gap={3}>
                <Textarea
                    sx={{
                        width: '100%',
                    }}
                    maxRows={9}
                    placeholder="Enter text here"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <Button
                    variant="outlined"
                    onClick={handleConvert}
                >
                    Convert
                </Button>
            </Grid>
            <Grid item display='flex' gap={3}>
                {
                    !images && <Box sx={{
                        width: '100%', height: '70vh', mt: 3, flexDirection: 'column',
                        border: '5px solid #808080', borderRadius: '15px',
                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Typography variant={"h4"} mb={6}>
                            Your description will be converted to image here
                        </Typography>
                        <Typography variant={"h5"}>Use the example below to get started</Typography>
                        <Grid container direction="row" spacing={1} sx={{
                            display: 'flex', justifyContent: 'center',
                            alignItems: 'center', mt: 2, flexWrap: 'wrap'
                        }}>
                            {
                                textToImgEx?.map((text, index) => (
                                    <Chip label={text} variant="outlined"
                                          key={index} onClick={e=>handleClick(text)}
                                            sx={{margin: '5px'}}/>
                                ))
                            }
                        </Grid>
                    </Box>
                }
                {
                    images &&
                    <Box sx={{
                        width: '100%', height: '70%', mt: 3, flexWrap: 'wrap',
                        border: '5px solid #808080', borderRadius: '15px', padding: '15px',
                        display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'
                    }}>
                        {images?.map((img, index) => (
                            <Grid item key={index} padding={1}>
                                <Card variant="outlined" sx={{width: 256}}>
                                    <AspectRatio minHeight="256px" maxHeight="256px" sx={{
                                        my: 2, border: '1px solid #808080',
                                        borderRadius: '5px',
                                    }}>
                                        <img
                                            src={img.url}
                                            loading="lazy"
                                            alt=""
                                        />
                                    </AspectRatio>
                                    <Box sx={{display: 'flex'}}>
                                        <Button
                                            variant="contained"
                                            size="sm"
                                            color="error"
                                            aria-label="Explore Bahamas Islands"
                                            sx={{
                                                mr: 'auto',
                                                fontWeight: 600,
                                                width: '45%',
                                            }}
                                            onClick={e=>handleDiscard(img)}
                                        >
                                            Discard
                                        </Button>
                                        <Button
                                            variant="contained"
                                            size="sm"
                                            color="primary"
                                            aria-label="Explore Bahamas Islands"
                                            sx={{
                                                ml: 'auto',
                                                fontWeight: 600,
                                                width: '45%',
                                            }}
                                            onClick={e=>handleDownload(img.url)}
                                        >
                                            Download
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Box>
                }
            </Grid>
            {
                loading && <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loading}
                    onClick={() => setLoading(false)}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            }
        </Grid>
    );
};

export default TextToImg;
