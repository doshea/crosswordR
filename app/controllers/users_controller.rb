class UsersController < ApplicationController

  # GET /users
  # GET /users.json
  def index
    @users = User.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @users, :except => [:admin, :email, :password_hash, :password_salt]  }
      format.xml { render xml: @users, :except => [:admin, :email, :password_hash, :password_salt]  }
    end
  end

  # GET /users/1
  # GET /users/1.json
  def show
    @user = User.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @user, :except => [:admin, :email, :password_hash, :password_salt] }
      format.xml { render xml: @user, :except => [:admin, :email, :password_hash, :password_salt] }
    end
  end

  # GET /users/new
  # GET /users/new.json
  def new
    @user = User.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @user }
    end
  end

  # GET /users/1/edit
  def edit
    @user = User.find(params[:id])

    unless current_user && ( (current_user == @user) || current_user[:admin] )
      redirect_to root_url, :notice => "Sorry, you can't edit other users"
    end

  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(params[:user])

	if @user.save
		if current_user
			redirect_to users_path, :notice => "User created!"
		else
			session[:user_id] = @user.id
			redirect_to root_url, :notice => "Signed Up!"
		end
	else
	  render "new"
	end

    #respond_to do |format|
    #  if @user.save
    #    format.html { redirect_to @user, notice: 'User was successfully created.' }
    #    format.json { render json: @user, status: :created, location: @user }
    #  else
    #    format.html { render action: "new" }
    #    format.json { render json: @user.errors, status: :unprocessable_entity }
    #  end
    #end
  end

  # PUT /users/1
  # PUT /users/1.json
  def update
    @user = User.find(params[:id])

    respond_to do |format|
      if @user.update_attributes(params[:user])
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user = User.find(params[:id])
    @user.destroy

    respond_to do |format|
      format.html { redirect_to users_url }
      format.json { head :no_content }
      format.js
    end
  end
end
