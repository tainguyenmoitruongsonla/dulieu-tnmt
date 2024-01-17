import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import ConstructionStatus from './cons-status';
import RealTime from './real-time';
import CountLicense from './count-license';
import CountLicenseFee from './count-license-fee';
import HomeMap from './map';
import { getData } from 'src/api/axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Home = () => {
    const [lcFee, setLicFee] = useState({ btnmt: [], ubnd: [] });
    const [lic, setLic] = useState({ total: 0, btnmt: 0, ubnd: 0 });
    const [loading, setLoading] = useState(false);

    const isMounted = useRef(true);

    const getDataLicenseFees = async () => {
        setLoading(true);
        try {
            const btnmtData = await getData('tien-cap-quyen/danh-sach/bo-cap');
            const ubndData = await getData('tien-cap-quyen/danh-sach/tinh-cap');

            if (isMounted.current) {
                setLicFee({ btnmt: btnmtData, ubnd: ubndData });
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const getDataLicenses = async () => {
        try {
            const data = await getData('giay-phep/dem-theo-co-quan-cp');
            if (isMounted.current) {
                setLic({ total: data.total, btnmt: data.btnmt, ubnd: data.ubndt });
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        getDataLicenseFees();
        getDataLicenses();
    }, []);

    return (
        <Grid container direction="column" justifyContent="center">
            <Grid container xs={12} md={12} justifyContent="center">
                <Grid container direction="row" justifyContent="center" spacing={2} xs={10} md={10}>
                    <Grid item xs={2} md={2}>
                        <Card sx={{ maxWidth: 200 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom component="div" sx={{fontSize: 16, color: '#083071', fontWeight: '500'}}>
                                        Đất đai
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Card sx={{ maxWidth: 200 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom component="div" sx={{fontSize: 16, color: '#083071', fontWeight: '500'}}>
                                        Giá đất & GPMB
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Card sx={{ maxWidth: 200 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom component="div" sx={{fontSize: 16, color: '#083071', fontWeight: '500'}}>
                                        TNN, KS, KTTV
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Card sx={{ maxWidth: 200 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom component="div" sx={{fontSize: 16, color: '#083071', fontWeight: '500'}}>
                                        Môi trường
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Card sx={{ maxWidth: 200 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom component="div" sx={{fontSize: 16, color: '#083071', fontWeight: '500'}}>
                                        Thanh tra
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container xs={12} md={12} justifyContent="center">
                <Grid container direction="row" justifyContent="center" spacing={2} xs={10} md={10}>
                    <Grid item xs={2} md={2}>
                        <Card sx={{ maxWidth: 200 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom component="div" sx={{fontSize: 16, color: '#083071', fontWeight: '500'}}>
                                        Đất đai
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Card sx={{ maxWidth: 200 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom component="div" sx={{fontSize: 16, color: '#083071', fontWeight: '500'}}>
                                        Giá đất & GPMB
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Card sx={{ maxWidth: 200 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom component="div" sx={{fontSize: 16, color: '#083071', fontWeight: '500'}}>
                                        TNN, KS, KTTV
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Card sx={{ maxWidth: 200 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom component="div" sx={{fontSize: 16, color: '#083071', fontWeight: '500'}}>
                                        Môi trường
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Card sx={{ maxWidth: 200 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom component="div" sx={{fontSize: 16, color: '#083071', fontWeight: '500'}}>
                                        Thanh tra
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
