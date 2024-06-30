import Image from 'next/image';

const Banner = () => {

    return (
        <div id="home-section" className='bg-lightkblue'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-evenly'>
                        <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>Học tiếng Đức và du học Đức cùng Devi-Group</h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>Chúng tôi là một công ty tư vấn nhân sự quốc tế có trụ sở tại Đức với đối tác trên toàn cầu. 
                            Nỗ lực tận tâm của chúng tôi nhằm hỗ trợ những người có nguyện vọng phát triển tại Đức và tạo ra kết nối giữa họ với các tổ chức Đức. 
                            Trọng tâm chính của chúng tôi xoay quanh các chương trình đào tạo nghề và các công việc nghề nghiệp.
                        </h3 >
                        <br />
                        <h1 className='text-midnightblue text-2xl sm:text-2xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>Giải Pháp</h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>
                        Chúng tôi đang làm việc chăm chỉ để thiết lập mối liên kết giữa các doanh nghiệp công ty Đức và tài năng trên toàn thế giới.
                        Trong hành trình theo đuổi mục tiêu này, chúng tôi cam kết tìm kiếm các cơ hội học tập và việc làm tốt nhất cho sinh viên hoặc
                        người tìm việc quan tâm đến việc chuyển đến Đức hoặc theo học chuyên nghiệp tại đây. Hơn nữa, chúng tôi đặt một sự quan
                        trọng lớn vào việc nuôi dưỡng tài năng và cung cấp hỗ trợ liên tục, không chỉ trong giai đoạn chuẩn bị cho việc chuyển đến
                        Đức mà còn trong suốt thời gian làm việc, học tập và sống tại đất nước này.
                        </h3>
                    </div>

                    <div className='col-span-6 flex justify-center'>
                        <Image src="/assets/devi-group-logo/DEVI group-m2.jpg" alt="nothing" width={1000} height={805} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
