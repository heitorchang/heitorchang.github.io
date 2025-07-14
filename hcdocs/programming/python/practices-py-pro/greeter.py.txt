from datetime import datetime

class Greeter:
    def __init__(self, test_datetime=None):
        if test_datetime:
            self.current_datetime = test_datetime
        else:
            self.current_datetime = datetime.now()

    def _day(self):
        return self.current_datetime.strftime("%A")

    def _part_of_day(self):
        if self.current_datetime.hour < 12:
            return "morning"
        elif self.current_datetime.hour < 17:
            return "afternoon"
        else:
            return "evening"

    def greet(self, store):
        print(f"""
Hi, welcome to {store}!
How's your {self._day()} {self._part_of_day()} going?
Here's a coupon for 20% off!""")
