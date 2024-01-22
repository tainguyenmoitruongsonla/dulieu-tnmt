import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import { getData } from 'src/api/axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles'


// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** Components
import LandManagementCommon from 'src/pages/dat-dai/chung'

const LinkStyled = styled('a')(({ theme }) => ({
    fontSize: '1rem',
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 400,
}))

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
        <>
            <Box sx={{ p: 2, display: 'flex', background: '#00466e', alignItems: 'center', justifyContent: 'space-between' }}>
                <Grid container md={6} alignItems='center'>
                    <img src="/images/logos/logo_sotnmt.png" width={60} height={60} alt="logo-page" />
                    <Typography
                        variant='h6'
                        align='left'
                        sx={{
                            color: '#fff !important',
                            p: 2,
                            lineHeight: 1,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            fontSize: '1.5rem !important'
                        }}
                    >
                        CỔNG THÔNG TIN DỮ LIỆU TÀI NGUYÊN MÔI TRƯỜNG TỈNH SƠN LA
                    </Typography>
                </Grid>
                <Grid container md={6} alignItems='center' justifyContent='flex-end'>
                    <Link passHref href='/'>
                        <LinkStyled>Đăng nhập</LinkStyled>
                    </Link> 
                    <Typography variant='h6' align='right' sx={{color: '#fff'}}>&nbsp;|&nbsp;</Typography>
                    <Link passHref href='/'>
                        <LinkStyled>Hướng dẫn sử dụng</LinkStyled>
                    </Link>
                    
                </Grid>
            </Box>
            <Grid container className='content-center'>
                <Grid container xs={12} md={12} justifyContent="center" >
                    <Grid container direction="row" justifyContent="center" spacing={1} xs={10} md={9} sx={{ p: 2 }}>
                        <Link href="/dat-dai/chung">
                            <Grid item xs={6} md={2}>
                                <Card sx={{ maxWidth: 200 }}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        image="/images/logos/geological-sign.png"
                                        alt="geological-sign"
                                        sx={{margin: "20px auto", width: "75%"}}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom component="div" sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                                                Đất đai
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Link>
                        <Grid item xs={6} md={2}>
                            <Card sx={{ maxWidth: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="/images/logos/giadat.png"
                                        alt="giadat"
                                        sx={{margin: "20px auto", width: "75%"}}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom component="div" sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                                            Giá đất & GPMB
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Card sx={{ maxWidth: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="/images/logos/hydrometeorology-sign.png"
                                        alt="hydrometeorology-sign"
                                        sx={{margin: "20px auto", width: "75%"}}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom component="div" sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                                            TNN, KS, KTTV
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Card sx={{ maxWidth: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="/images/logos/env-sign.png"
                                        alt="env-sign"
                                        sx={{margin: "20px auto", width: "75%"}}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom component="div" sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                                            Môi trường
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Card sx={{ maxWidth: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="/images/logos/logo_sotnmt.png"
                                        alt="logo_sotnmt"
                                        sx={{margin: "20px auto", width: "75%"}}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom component="div" sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                                            Thanh tra
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="center" spacing={1} xs={10} md={9} sx={{ p: 2 }}>
                        <Grid item xs={6} md={2}>
                            <Card sx={{ maxWidth: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="/images/logos/office.png"
                                        alt="office"
                                        sx={{margin: "20px auto", width: "75%"}}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom component="div" sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                                            Văn phòng
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Card sx={{ maxWidth: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="/images/logos/office-dkdd.png"
                                        alt="office-dkdd"
                                        sx={{margin: "20px auto", width: "75%"}}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom component="div" sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                                            Văn phòng ĐKĐĐ
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Card sx={{ maxWidth: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="/images/logos/waterresources-sign.png"
                                        alt="waterresources-sign"
                                        sx={{margin: "20px auto", width: "75%"}}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom component="div" sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                                            Quan trắc
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Card sx={{ maxWidth: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="/images/logos/slack.png"
                                        alt="slack"
                                        sx={{margin: "20px auto", width: "75%"}}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom component="div" sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                                            CNTT
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Card sx={{ maxWidth: 200 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="/images/logos/quydat.png"
                                        alt="quydat"
                                        sx={{margin: "20px auto", width: "75%"}}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom component="div" sx={{ fontSize: 16, color: '#083071', fontWeight: '500' }}>
                                            Phát triển quỹ đất
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>

    );
};

export default Home;
