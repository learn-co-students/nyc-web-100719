require 'pry'

class BankAccount
  attr_reader :account_number#, :balance
  # attr_writer :balance
  attr_accessor :balance
  
  @@all = []
  
  def initialize(account_number, balance)
    @account_number = account_number
    @balance = balance

    @@all << self
  end

  def deposit(amount)
    @balance += amount
  end

  def withdraw(amount)
    @balance -= amount
  end


  # def account_number
  #   @account_number
  # end

  # def balance
  #   @balance
  # end

  # def balance=(new_balance)
  #   @balance = new_balance
  # end
  
  def stuff
    @thing = 'thing'
  end

  # self is the class BankAccount at this line

  def self.all
    @@all
  end

  def self.deposit(account_number, amount)
    bank_account = self.all.find do |account|
      account.account_number == account_number
    end

    bank_account.deposit(amount)
  end
end # class BankAccount

binding.pry
'kthxbye'
