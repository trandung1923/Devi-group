'use client'; 
import Image from 'next/image';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Content = () => {
    return (
        <div id="content" className='bg-lightkblue'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1' style={{ marginBottom: '50px' }}>
                    <div className='col-span-12 flex flex-col justify-evenly'>
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                            <Image src="/assets/banner/check.svg" alt="check-image" width={20} height={20} />
                            <h3 className='text-kellygreen  text-3xl sm:text-4xl font-semibold text-center lg:text-start'>Hoạt động chính</h3>
                        </div>
                        <div className='flex items-center justify-between pt-10 lg:pt-4'>
                            <div className='flex gap-5'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Khóa học tiếng Đức từ A1 đến B2</p>
                            </div>
                            <div className='flex gap-5'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Dịch vụ Tư vấn và làm hồ sơ du học Đức</p>
                            </div>
                            <div className='flex gap-5'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Cung cấp các gói bảo hiểm cho du học sinh</p>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={4}>
                            <div style={{ fontSize: '23px',fontWeight: 'bold' }}>Tại Việt Nam</div>
                            <div>
                                Hiểu rõ văn hóa và khát vọng của thanh niên tại Việt Nam.
                                Đội ngũ của chúng tôi tại văn phòng ở Việt Nam hỗ trợ họ theo đuổi ước mơ và xây dựng sự nghiệp tương lai. 
                                Dịch vụ tư vấn của chúng tôi phục vụ cho những người quan tâm đến việc làm và cư trú tại Đức.
                            </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                            <div style={{ fontSize: '23px',fontWeight: 'bold' }}>Tại Đức</div>
                            <div>
                                Tại Đức, chúng tôi duy trì mối quan hệ chặt chẽ với các trường nghề, cơ quan chức năng và các công ty đang tích
                                cực tìm kiếm sinh viên nghề nghiệp và công nhân từ các quốc gia ngoại trời. 
                                Chúng tôi tạo điều kiện để kết nối với những cá nhân có trình độ cao nhất, đã đạt được trình độ
                                tiếng Đức theo yêu cầu hoặc cao hơn. Đồng thời, chúng tôi đảm bảo rằng sinh viên khi đến Đức sẽ nhận được sự hỗ trợ
                                cần thiết và quyền lợi phù hợp.
                            </div>
                            </Grid>
                            <Grid item xs={12} md={4}>
                            <div style={{ fontSize: '23px',fontWeight: 'bold' }}>Tại một số nước khác</div>
                            <div>
                                Chúng tôi cũng có đối tác ở nhiều quốc gia khác nhau, bao gồm Thái Lan, Indonesia, Philippines và Ấn Độ, v.v. 
                                Chúng tôi liên tục nỗ lực cung cấp hỗ trợ, không chỉ đối với sinh viên Việt Nam một cách cụ thể mà còn đối với sinh viên nghề quốc tế nói chung tại Đức.</div>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Content;
