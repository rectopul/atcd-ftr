import { Controller, Get, Res, Req, Render } from '@nestjs/common';
import { UserByToken } from 'src/session/auth';
import { PrismaService } from 'src/database/prisma.service';
import { JsonWebToken } from 'src/modules/JsonWebToken';
import { ConsoleLogger } from '@nestjs/common/services';

@Controller('admin/dashboard')
export class DashboardController {
    constructor(private auth: UserByToken, private readonly prisma: PrismaService, private readonly jsonToken: JsonWebToken){}

    @Get()
    @Render('pages/dashboard')
    async view(@Req() req, @Res() res): Promise<Object> {

        try {
            
            const token = req.cookies.token || ''
    
            if (!token) return res.redirect('/panel/login')

            const { id: jti } = await this.auth.checkToken(token)

            if(! await this.jsonToken.checkToken(jti)) return res.redirect('/panel/login')

            const refreshToken = await this.prisma.refreshToken.findFirst({
                where: {id: jti},
                include: { User: { include: { UserImage: true } } }
            })

            const clients = await this.prisma.client.findMany()


            return {
                pageClasses: `dashboard bg-default g-sidenav-show g-sidenav-pinned`,
                title: `Dashboard Unicred`,
                user: refreshToken.User,
                panel: true,
                userImage: refreshToken.User.UserImage?.name,
                clients
            }
        } catch (error) {
            console.log(error)
            return res.redirect('/panel/login')
        }
    }
}
