import { Link, Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {

  const { isLoggedIn, isLoading } = useGlobalContext();

  if (isLoggedIn && !isLoading) return <Redirect href="/home" />;

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>

        <View className=" items-center justify-center w-full min-h-[85vh] px-4">
          <Image source={images.logo} resizeMode='contain' className="w-[130px] h-[84px]" />
          <Image source={images.cards}
            resizeMode='contain' className="max-w-[380px] w-full h-[300px]" />
          <View className="relative mt-5">
            <Text className='text-3xl text-center font-bold text-white' >
              Discover Endless Possibilities with {' '}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode='contain'
            />
          </View>
          <Text className="text-sm mt-5 mx-4 text-center font-pregular text-white">Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>
          <CustomButton onPress={() => { router.push('/sign-in') }} title="Continue with Email" containerStyles='mt-7 w-full' />
        </View>
        <StatusBar style='light' backgroundColor='#161622'></StatusBar>
      </ScrollView>

    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
