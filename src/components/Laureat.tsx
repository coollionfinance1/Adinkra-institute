import { Button, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';

function removeAccents(str: string) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const Laureat: React.FC<{
  index: number;
  title: string;
  subtitle: string;
  content1: string;
  content2: string;
  state: string;
}> = ({ index, title, subtitle, content1, content2, state }) => {
  const [TestImg, setTestImg] = useState<string | undefined>(undefined);
  useEffect(() => {
    const loadImage = async () => {
      const img = await import(
        `../assets/Achievers/${state}/${removeAccents(
          subtitle.split(' ')[0]
        )}.png`
      );
      setTestImg(img.default); // Use img.default if using React's Webpack setup
    };


    loadImage();
  }, [state]);
  const [visible, setVisible] = useState(false);
  const className = !visible
    ? 'text-sm leading-6 text-gray-900 h-36 overflow-hidden'
    : 'text-sm leading-6 text-gray-900 overflow-hidden';
  const mainClassName =
    index % 2 == 0
      ? 'flex flex-col lg:flex-row  justify-between items-start bg-bg p-4 rounded-md'
      : 'flex flex-col lg:flex-row justify-between items-start';
  return (
    <div className={mainClassName}>
      <div className="lg:w-[30%] h-full w-full flex justify-center items-center">
        <img
          src={TestImg}
          alt="test"
          className="w-52 lg:w-full rounded-md mb-2 lg:mb-0"
        />
      </div>

      <div className="lg:w-[65%] h-full">
        <Typography variant="h6" className=" text-primary text-md">
          {title}
        </Typography>
        <Typography variant="h4" className=" mb-3 font-bold">
          {subtitle === 'LaDrina Wilson' ? 'Dr. LaDrina Wilson' : subtitle}
        </Typography>
        <p className={className}>
          {content1}
          <br />
          <br />
          {content2}
          {visible && (
            <Button
              size="sm"
              variant="text"
              onClick={() => setVisible((state) => !state)}
              className="inline-block"
            >
              <span className="underline">Show less</span>
            </Button>
          )}
        </p>
        {!visible && (
          <Button
            size="sm"
            variant="text"
            onClick={() => setVisible((state) => !state)}
            className="p-0 m-0"
          >
            <span className="underline"> Show more</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Laureat;
