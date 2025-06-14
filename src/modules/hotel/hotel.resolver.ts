import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver('Hotel')
export class HotelResolver {
  private hotels = [
    {
      id: 1,
      name: 'Evernight Hotel',
      address: 'Underworld',
      phone: '023-456789',
    },
    {
      id: 2,
      name: 'North Sun Hotel',
      address: 'Jinglong Mountain',
      phone: '023-123456',
    },
    {
      id: 3,
      name: 'Star Bloom Hotel',
      address: 'Celestial Domain',
      phone: '023-053812',
    },
  ];
  @Query('hotels')
  getAllHotels() {
    return this.hotels;
  }

  @Query('hotel')
  getHotelById(@Args('id') id: number) {
    return this.hotels.find((hotel) => hotel.id == id);
  }

  @Mutation('addHotel')
  addHotel(
    @Args('name') name: string,
    @Args('address') address: string,
    @Args('phone') phone: string,
  ) {
    const sortedHotels = this.hotels.sort((a, b) => a.id - b.id);
    const lastId =
      sortedHotels.length > 0 ? sortedHotels[sortedHotels.length - 1].id : 0;
    const newHotel = {
      id: lastId + 1,
      name,
      address,
      phone,
    };
    this.hotels.push(newHotel);
    return newHotel;
  }
  @Mutation('updateHotel')
  updateHotel(
    @Args('id') id: number,
    @Args('name') name: string,
    @Args('address') address: string,
    @Args('phone') phone: string,
  ) {
    const hotelIndex = this.hotels.findIndex((hotel) => hotel.id == id);
    if (hotelIndex === -1) {
      throw new Error('Hotel not found');
    }
    const updatedHotel = {
      ...this.hotels[hotelIndex],
      name,
      address,
      phone,
    };
    this.hotels[hotelIndex] = updatedHotel;
    return updatedHotel;
  }
  @Mutation('deleteHotel')
  deleteHotel(@Args('id') id: number) {
    try {
      const hotelIndex = this.hotels.findIndex((hotel) => hotel.id == id);
      if (hotelIndex === -1) {
        return false;
      }
      this.hotels.splice(hotelIndex, 1);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}
