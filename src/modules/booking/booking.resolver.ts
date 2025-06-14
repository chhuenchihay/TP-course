import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver('Booking')
export class BookingResolver {
  private bookings = [
    {
      id: 1,
      hotel_id: 1,
      start_date: '10/10/2025',
      end_date: '32/10/2025',
      is_checked_in: true,
      price: 190.88,
    },
    {
      id: 2,
      hotel_id: 2,
      start_date: '10/10/2025',
      end_date: '2/11/2025',
      is_checked_in: true,
      price: 290,
    },
    {
      id: 3,
      hotel_id: 3,
      start_date: '10/10/2025',
      end_date: '2/11/2025',
      is_checked_in: true,
      price: 390,
    },
  ];
  
  @Query('bookings')
  getAllBookings() {
    return this.bookings;
  }

  @Query('booking')
  getBookingById(@Args('id') id: number) {
    return this.bookings.find((booking) => booking.id == id);
  }

  @Mutation('bookHotel')
  bookHotel(
    @Args('hotel_id') hotel_id: number,
    @Args('start_date') start_date: string,
    @Args('end_date') end_date: string,
    @Args('price') price: number,
  ) {
    const sortedBookings = this.bookings.sort((a, b) => a.id - b.id);
    const lastId =
      sortedBookings.length > 0 ? sortedBookings[sortedBookings.length - 1].id : 0;
    const is_checked_in = false; // Default value for new bookings
    const newBooking = {
      id: lastId + 1,
      hotel_id,
      start_date,
      end_date,
      is_checked_in,
      price,
    };
    this.bookings.push(newBooking);
    return newBooking;
  }
  @Mutation('checkInHotel')
  checkInHotel(
    @Args('id') id: number,
    @Args('is_checked_in') is_checked_in: boolean,
  ) {
    const bookingIndex = this.bookings.findIndex((booking) => booking.id == id);
    if (bookingIndex === -1) {
      throw new Error('Booking not found');
    }
    const updatedBooking = {
      ...this.bookings[bookingIndex],
      is_checked_in,
    };
    this.bookings[bookingIndex] = updatedBooking;
    return updatedBooking;
  }

  @Mutation('cancelHotel')
  cancelHotel(@Args('id') id: number) {
    try {
      const hotelIndex = this.bookings.findIndex((hotel) => hotel.id == id);
      if (hotelIndex === -1) {
        return false;
      }
      this.bookings.splice(hotelIndex, 1);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

}
